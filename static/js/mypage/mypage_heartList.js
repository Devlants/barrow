const checkboxes = document.getElementsById('heartItemLabel');

function allYes(){
    $("input[name=cbox]").prop("checked", true);
}

function allNo(){
    $("input[name=cbox]").prop("checked", false);
}

function deleteItem(){
    if ($('input:checkbox[name="cbox"]').is(":checked")) {
        var names = [];

        $('input:checked').each(function () {
            names.push(parseInt(this.id));
        });
    }
     $.ajax({
         url: 'http://127.0.0.1:8000/account/mypage/favorite/',
         type: 'POST',
         data: JSON.stringify({
             "id": names,
             "user_id": userId
         }), //보낼 데이터
         success: function(data) {
             alert('해당 상품이 찜 목록에서 삭제되었습니다.');
             location.reload();
         },
         error: function(xhr, textStatus, thrownError) {
             alert('해당 상품은 찜 목록에서 삭제할 수 없습니다.');
         }
     })
}
// function heartItemDelete(){
//      $.ajax({
//          url: 'http://127.0.0.1:8000/mypage/favorite/',
//          type: 'post',
//          // data: JSON.stringify({
//          //     "id": 'id',
//          //     "user_id": {{user.id}}
//          // }), //보낼 데이터
//          success: function (data) {
//              alert('해당 상품이 찜 목록에서 삭제되었습니다.');
//          },
//          error: function (xhr, textStatus, thrownError) {
//              alert('해당 상품은 찜 목록에서 삭제할 수 없습니다.');
//          }
//      })
// }