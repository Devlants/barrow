# Generated by Django 4.1.3 on 2022-12-01 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('_product', '0004_product_area_detail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product_image',
            name='image',
            field=models.ImageField(blank=True, default='/media/product/product_dafault.png', null=True, upload_to='media/product'),
        ),
    ]
