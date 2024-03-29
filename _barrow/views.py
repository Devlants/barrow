from django.shortcuts import render
from _search.models import Keyword, CurMostSearch
from _account.models import User
from _product.models import Product

from django.db.models import Sum, Count

import datetime
from datetime import datetime

import requests
import numpy as np
import pandas as pd


def base(request):

    user = request.user
    recent_search_query = None

    # 검색기록
    if request.user.is_authenticated:
        recent_search_query = user.keyword.all().order_by("-date")
        recent_search_query = recent_search_query[:10]

    today = datetime.now()
    most_search_date = str(today.year) + '-' + str(today.month).zfill(2) + "-" + str(today.day).zfill(2) + " " + str(
        today.hour).zfill(2) + ":00"

    if CurMostSearch.objects.all().exists():

        last_mosts = CurMostSearch.objects.all()

        if last_mosts[0].time.hour != today.hour:
            print(1)
            create_most_search()
    else:

        create_most_search()

    most_search = list(CurMostSearch.objects.all().order_by("rank"))
    for i in range(20 - len(most_search)):
        most_search.append(None)
    most_search_keyword_list = list(CurMostSearch.objects.all().order_by("rank").values_list("keyword",flat=True))
    base_context = {
        "recent_search": recent_search_query,
        "most_search_date": most_search_date,
        "most_search": most_search,
        "most_search_keyword_list" : most_search_keyword_list,
    }

    return base_context


def side(request):
    user = request.user

    favorite_num = 0
    recent_view = None

    if request.user.is_authenticated:
        favorite = user.favorite
        favorite_num = favorite.count()

        recent_view = user.get_recent_view()

    side_context = {
        "favorite_num": favorite_num,
        "recent_views": recent_view,
    }
    return side_context


def get_best():

    best = Product.objects.filter(start_date__lte = datetime.now(),end_date__gte=datetime.now()).order_by("-views")

    type_queries = list(best.values("type"))
    types = []

    for type in type_queries:
        type = list(type["type"])
        type = list(map(int, type))
        types.append(type)
    best_products = list(zip(list(best), types))

    if len(best_products) % 20 != 0:
        for i in range(20 - len(best_products) % 20):
            best_products.append((None, None))
    context = {
        "best_products": best_products,
    }
    return context


def get_category_num():
    result = {}
    
    products = Product.objects.filter(start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['전체'] = (products.count())

    products = Product.objects.filter(category="CLOTHES", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['의류'] = (products.count())

    products = Product.objects.filter(category="SHOES", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['신발'] = (products.count())

    products = Product.objects.filter(category="TRAVELS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['여행용품'] = (products.count())

    products = Product.objects.filter(category="BAGS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['가방'] = (products.count())

    products = Product.objects.filter(category="CARRIERS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['캐리어'] = (products.count())

    products = Product.objects.filter(category="SPORTS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['스포츠'] = (products.count())

    products = Product.objects.filter(category="LEISURES", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['레저'] = (products.count())

    products = Product.objects.filter(category="HOMES", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['가전'] = (products.count())

    products = Product.objects.filter(category="FURNITURES", start_date__lte=datetime.now(),
                                      end_date__gte=datetime.now())
    result['가구'] = (products.count())

    products = Product.objects.filter(category="ELECTROMICS", start_date__lte=datetime.now(),
                                      end_date__gte=datetime.now())
    result['전자제품'] = (products.count())

    products = Product.objects.filter(category="CASUALS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['캐주얼'] = (products.count())

    products = Product.objects.filter(category="OTHERS", start_date__lte=datetime.now(), end_date__gte=datetime.now())
    result['기타'] = (products.count())

    return result


def home(request):
    if request.user.is_authenticated:
        user = request.user

    context = get_best()
    context["best_products"] = context["best_products"][:4]
    context.update(base(request))
    context.update(side(request))

    return render(request, "main/main.html", context)


def best(request, page_num):
    context = get_best()
    context["total_page_num"] = len(context["best_products"])
    context["best_products"] = context["best_products"][20 * (page_num - 1):20 * (page_num)]

    context.update(base(request))
    context.update(side(request))
    return render(request, "main/best.html", context)


def category_view(request, category, sort):
    categories = {"의류": "CLOTHES", "신발": "SHOES", "여행용품": "TRAVELS", "가방": "BAGS", "캐리어": "CARRIERS", "스포츠": "SPORTS",
                  "레저": "LEISURES", "가전": "HOMES", "가구": "FURNITURES", "전자제품": "ELECTROMICS", "캐주얼": "CASUALS",
                  "기타": "OTHERS"}
    sorts = {"최신순": "-created", "높은가격순": "-price", "낮은가격순": "price", "조회순": "-views"}

    if sort == "추천순":
        if category == "전체":

            products = Product.objects.filter(start_date__lte=datetime.now(), end_date__gte=datetime.now()).annotate(
                likes=Count("favor")
            ).order_by("-likes")
        else:
            products = Product.objects.filter(category=categories[category], start_date__lte=datetime.now(),
                                              end_date__gte=datetime.now()).annotate(
                likes=Count("favor")
            ).order_by("-likes")


    elif sort == "신청순":
        if category == "전체":

            products = Product.objects.filter(start_date__lte=datetime.now(), end_date__gte=datetime.now()).annotate(
                deals=Count("deal")
            ).order_by("-deals")
        else:
            products = Product.objects.filter(category=categories[category], start_date__lte=datetime.now(),
                                              end_date__gte=datetime.now()).annotate(
                deals=Count("deal")
            ).order_by("-deals")

    else:
        if category == "전체":
            products = Product.objects.filter(start_date__lte = datetime.now(),end_date__gte=datetime.now()).order_by(sorts[sort])
        else:
            products = Product.objects.filter(category = categories[category],start_date__lte = datetime.now(),end_date__gte=datetime.now()).order_by(sorts[sort])

    total_category_num = get_category_num()

    type_queries = list(products.values("type"))
    types = []

    for type in type_queries:
        type = list(type["type"])
        type = list(map(int, type))
        types.append(type)
    products = list(zip(list(products), types))

    context = {
        "category_num": total_category_num,
        "cur_category_num": total_category_num[category],
        "products": products,
        "is_key": False,
        "category": category,
        "sort": sort,
    }
    context.update(base(request))
    context.update(side(request))
    return render(request, "main/category.html", context)


def near_products(request):
    print(request.POST)
    ##도로명 주소 지번으로 변환하기

    # user 주소에서 동 찾아내기

    url = 'https://dapi.kakao.com/v2/local/geo/coord2address.json'
    params = {'x': request.POST["cur_posx"], 'y': request.POST["cur_posy"]}
    headers = {"Authorization": "KakaoAK 507b88e0987b8499d1fa196252551262"}
    place = requests.get(url, headers=headers, params=params).json()
    user_address_DONG = place["documents"][0]["address"]["region_3depth_name"]
    # user랑 도, 시, 동 같은 제품 가져오기
    user_address_for_query = place["documents"][0]["address"]["region_1depth_name"]+" "+place["documents"][0]["address"]["region_2depth_name"]
    map_contents = Product.objects.filter(area__contains = user_address_for_query,start_date__lte = datetime.now(),end_date__gte=datetime.now())

    print(map_contents)
    # 데이터 정제하기
    ids = list(map_contents.values_list("id", flat=True).order_by("id"))
    addresses = list(map_contents.values_list("area", flat=True).order_by("id"))
    addrs = []
    for i in range(len(ids)):
        addrs.append(
            {
                "id": ids[i],
                "address": addresses[i]
            }
        )
    # 유저랑 같은동인것 검색
    products = []
    for product in addrs:
        url = 'https://dapi.kakao.com/v2/local/search/address.json'
        params = {'query': product["address"]}
        headers = {"Authorization": "KakaoAK 507b88e0987b8499d1fa196252551262"}
        place = requests.get(url, headers=headers, params=params).json()

        try:
            if user_address_DONG == place["documents"][0]["address"]["region_3depth_name"]:

                products.append(
                    Product.objects.get(id=product["id"], start_date__lte=datetime.now(), end_date__gte=datetime.now()))
        except:
            continue

    types = [int(product.type) for product in products]

    products_near = list(zip(list(products), types))
    # 전체 상품 이미지src랑 도로명 주소 보내기
    products = Product.objects.filter(start_date__lte=datetime.now(), end_date__gte=datetime.now())
    products_all = []
    for product in products:
        image = product.get_first_image()
        products_all.append(
            {
                "image": image.image.url,
                "address": product.area
            }
        )
    context = {

        "products_near": products_near,
        "near_item_num": len(products_near),
        "products_all": products_all,
        "item_num": len(products_all),

    }
    print(context)
    context.update(base(request))
    context.update(side(request))
    return render(request, "main/map.html", context)


def create_most_search():
    most_search_queries = Keyword.objects.all().values("content").annotate(
        content_count=Sum("count")
    ).order_by("-content_count")
    most_search_queries = most_search_queries[:20]

    last_most_quries = CurMostSearch.objects.all()
    last_mosts = {}
    for last_most_query in last_most_quries:
        last_mosts[last_most_query.keyword] = last_most_query.rank

    last_most_contents = list(last_mosts.keys())

    for last_most in last_most_quries:
        last_most.delete()

    for i in range(len(most_search_queries)):
        if most_search_queries[i]["content"] in last_most_contents:
            vector = int(last_mosts[most_search_queries[i]["content"]]) - i
        else:
            vector = 0


        CurMostSearch.objects.create(keyword=most_search_queries[i]["content"], rank=i, vector=vector)
