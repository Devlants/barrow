let varifyNum;
let varifyflag=false;
$(document).ready(function () {
    //* setting 
    setSelect();
    setAcodian();
    setCheckbox();
    setAllInput();
    setTextArea();
    setRealtimevalidation();
    setInputPhoneNum();
    setPhoneNumVerify();
});

function setAllInput() {
    setInput($('#input_id'), $('.id_err_msg'));
    setInput($('#input_id'), $('.id_dup_msg'));
    setInput($('#input_pwd'), $('.pwd_err_msg'));
    setInput($('#input_pwd'), $('.input_pwd_icon'));
    setInput($('#input_repwd'), $('.repwd_err_msg'));
    setInput($('#input_name'), $('.name_err_msg'));
    setInput($('#input_phoneNum'), $('.phonenum_err_msg'));
}

function setInput($input, $target) {
    $($input).keyup(function () {
        $($target).css('visibility', 'hidden');
    });
}

function setCheckbox() {
    $('.check_all_btn').click(function () {
        var checked = $('.check_all_btn').is(':checked');
        if (checked) {
            $('.check').prop('checked', true);
            $('.check_err_msg').css('visibility', 'hidden');
        }
        else
            $('.check').prop('checked', false);
    });
    $('.check').click(function () {
        console.log($('.check').length);
        console.log($("input:checkbox[name='check']:checked").length);
        var all_checkbox = $('.check').length;
        var checked_checkbox = $("input:checkbox[name='check']:checked").length;
        if (all_checkbox == checked_checkbox) {
            $('.check_all_btn').prop('checked', true);
        } else {
            $('.check_all_btn').prop('checked', false);
        }
    });
}

function setAcodian() {
    var detail1 = true;
    var detail2 = true;
    $('.check_detail1').click(function () {
        if (detail1) {
            $('.check_textarea1').slideDown();
            $('.check_textarea2').slideUp();
            detail1 = false;
            detail2 = true;
        }
        else {
            $('.check_textarea1').slideUp();
            detail1 = true;
        }
    });

    $('.check_detail2').click(function () {
        if (detail2) {
            $('.check_textarea2').slideDown();
            $('.check_textarea1').slideUp();
            detail2 = false;
            detail1 = true;
        }
        else {
            $('.check_textarea2').slideUp();
            detail2 = true;
        }
    });

}

function setSelect() {
    var now = new Date();
    var year = now.getFullYear();
    for (var i = 1; i <= 12; i++) {
        $('#select_month').append("<option value='" + i + "'>" + i + "월</option>");
    }
    for (var i = 1; i <= 31; i++) {
        $('#select_date').append("<option value='" + i + "'>" + i + "일</option>");
    }
    for (var i = year - 50; i <= year; i++) {
        $('#select_year').append("<option value='" + i + "'>" + i + "년</option>");
    }
}

function setTextArea() {
    var t1 = `1. 개인정보의 수집항목 및 수집방법 
    통계청 나라통계사이트에서는 기본적인 회원 서비스 제공을 위한 필수정보로 실명인증정보와 가입정보로 구분하여 다음의 정보를 수집하고 있습니다. 필수정보를 입력해주셔야 회원 서비스 이용이 가능합니다.
    
      가. 수집하는 개인정보의 항목 
        * 수집하는 필수항목
          - 실명인증정보 : 이름, 휴대전화번호, 본인 인증 또는 I-PIN(개인식별번호), GPKI
          - 가입정보 : 아이디, 비밀번호, 성명, 이메일, 전화번호, 휴대전화번호, 기관명
        * 선택항목
          - 주소, 기관의 부서명
        
       [컴퓨터에 의해 자동으로 수집되는 정보]
       인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. 
        - IP주소, 서비스 이용기록, 방문기록 등
        
      나. 개인정보 수집방법
          홈페이지 회원가입을 통한 수집 
    
    2. 개인정보의 수집/이용 목적 및 보유/이용 기간
    통계청 나라통계사이트에서는 정보주체의 회원 가입일로부터 서비스를 제공하는 기간 동안에 한하여 통계청 나라통계사이트 서비스를 이용하기 위한 최소한의 개인정보를 보유 및 이용 하게 됩니다. 회원가입 등을 통해 개인정보의 수집·이용, 제공 등에 대해 동의하신 내용은 언제든지 철회하실 수 있습니다. 회원 탈퇴를 요청하거나 수집/이용목적을 달성하거나 보유/이용기간이 종료한 경우, 사업 폐지 등의 사유발생시 개인 정보를 지체 없이 파기합니다.
    
      * 실명인증정보
        - 개인정보 수집항목 : 이름, 휴대폰 본인 인증 또는 I-PIN(개인식별번호), GPKI
        - 개인정보의 수집·이용목적   : 홈페이지 이용에 따른 본인 식별/인증절차에 이용
        - 개인정보의 보유 및 이용기간 : I-PIN / GPKI는 별도로 저장하지 않으며 실명인증용으로만 이용
    
      * 가입정보
        - 개인정보 수집항목 : 아이디, 비밀번호, 성명, 이메일, 전화번호, 휴대전환번호, 기관명
        - 개인정보의 수집·이용목적 : 홈페이지 서비스 이용 및 회원관리, 불량회원의 부정 이용방지, 민원신청 및 처리 등
        - 개인정보의 보유 및 이용기간 : 2년 또는 회원탈퇴시
    
    정보주체는 개인정보의 수집·이용목적에 대한 동의를 거부할 수 있으며, 동의 거부시 통계청 나라통계사이트에 회원가입이 되지 않으며, 통계청 나라통계사이트에서 제공하는 서비스를 이용할 수 없습니다.
    
    3. 수집한 개인정보 제3자 제공
    통계청 나라통계사이트에서는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            
    4. 개인정보 처리업무 안내
    통계청 나라통계사이트에서는 개인정보의 취급위탁은 하지 않고 있으며, 원활한 서비스 제공을 위해 아래의 기관을 통한 실명인증 및 공공 I-PIN, GPKI 인증을 하고 있습니다. 
    
      * 수탁업체
        - SCI서울신용평가정보(주)
          · 위탁업무 내용 : 실명확인
          · 개인정보 보유 및 이용 기간 : 신용평가 기관에서는 이미 보유하고 있는 개인정보이기 때문에 별도로 저장하지 않음
        - 행정자치부
          · 위탁업무 내용 : 공공 I-PIN, GPKI 인증
          · 개인정보 보유 및 이용 기간 : 행정자치부에서는 이미 보유하고 있는 개인정보이기 때문에 별도로 저장하지 않음`;
    var t2 = `제1조 (목적)
    이 약관은 SK플래닛 주식회사(이하 “회사”)가 제공하는 위치기반서비스(이하 ‘서비스’)에 관하여 회사와 이용계약을 체결한 고객이 서비스를 이용하는 데 필요한 회사와 고객의 권리 및 의무, 기타 제반 사항을 정함을 목적으로 합니다.
    제2조 (약관의 효력 및 변경)
    ① 본 약관은 본 서비스를 이용하고자 하는 모든 고객을 대상으로 합니다.
    ② 본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 고객에게 공시하고, 이에 동의한 고객이 본 서비스에 가입함으로써 효력이 발생합니다.
    ③ 회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 구체적으로 기재하여 제2항과 같은 방법으로 그 적용일자 7일 전부터 공지합니다. 다만, 이용자에게 불리한 약관을 변경할 때에는 그 적용일자 30일 전부터 공지하며, 이메일(E-mail)을 통해 이용자에게 개별 통지합니다. 단, 이용자가 연락처를 기재하지 않았거나, 변경 후 수정하지 않아 개별 통지가 어려우면 본 항의 공지를 개별 통지한 것으로 간주합니다.
    ④ 회사가 제3항에 따라 변경 약관을 공지하거나 통지할 때 약관 변경 적용일까지 거부 의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 이용자에게 통지하였음에도 이용자가 구체적으로 약관 변경에 거부 의사를 표시하지 않으면 서비스제공자는 이용자가 변경 약관에 동의한 것으로 간주합니다. 이용자는 변경된 약관 사항에 동의하지 않으면 서비스 이용을 중단하고 이용 계약을 해지할 수 있습니다.
    제3조 (약관 외 준칙)
    이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률(이하 “위치정보법”), 전기통신사업법, 정보통신망 이용촉진 및 보호 등에 관한 법률(이하 “정보통신망법”), 개인정보보호법 등 관계 법령 및 회사가 정한 서비스의 세부이용지침 등의 규정을 따릅니다.
    제2장 서비스의 이용
    제4조 (가입자격)
    ① 서비스에 가입할 수 있는 자는 위치기반서비스를 이용할 수 있는 이동전화 단말기, 기타 서비스를 이용할 수 있는 단말기(이하 “단말기”)의 소유자 본인이어야 합니다.
    ② 법인은 법인의 사업자번호를 사용하여 서비스에 가입할 수 있습니다.
    제5조 (서비스 가입)
    회사는 다음 각 호의 고객 가입신청을 승낙하지 않을 수 있습니다.
    1. 실명이 아니거나 다른 사람의 명의를 사용하는 등 허위로 신청하는 경우
    2. 고객 등록 사항을 빠뜨리거나 잘못 기재하여 신청하는 경우
    3. 공공질서 또는 미풍양속을 해치거나 그럴 목적으로 신청한 경우
    4. 기타 회사가 정한 이용신청 요건을 충족하지 않았을 경우
    제6조 (서비스의 해지)
    서비스 해지를 희망하는 고객은 회사가 정한 절차(유무선 인터넷 홈페이지 등을 통해 공지합니다)를 통해 서비스 해지를 신청할 수 있습니다.
    제7조 (서비스의 수준)
    ① 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 단, 회사의 업무 또는 기술상의 이유로 서비스가 일시 중지될 수 있으며, 운영상의 목적으로 회사가 정한 기간에도 서비스는 일시 중지될 수 있습니다. 이때 회사는 사전 또는 사후에 이를 공지합니다.
    ② 위치정보는 관련 기술의 발전에 따라 오차가 발생할 수 있습니다.
    제8조 (서비스 이용의 제한 및 정지)
    회사는 다음 각 호의 1에 해당하는 경우, 해당 고객의 서비스 이용을 제한하거나 정지시킬 수 있습니다.
    1. 다른 사람의 명의(주민등록번호) 등을 이용하여 서비스에 가입한 경우
    2. 타인의 서비스 이용을 방해하거나 타인의 개인정보를 무단으로 사용한 경우
    3. 서비스를 이용하여 법령, 공공질서, 미풍양속 등을 거스르는 행위를 한 경우
    제9조 (서비스의 변경 및 중지)
    ① 회사는 다음 각 호의 1에 해당하면 고객에게 서비스의 전부 또는 일부를 제한·변경하거나 중지할 수 있습니다.
    
    1. 서비스용 설비의 보수 등 공사로 어쩔 수 없는 경우
    2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
    3. 서비스 제휴업체와의 계약 종료 등과 같은 회사의 제반 사정 또는 법률상의 장애 등으로 유지할 수 없는 경우 기타 천재지변, 국가비상사태 등 불가항력의 사유가 있는 경우
    ② 제1항에 따른 서비스 중단일 때에는 회사는 해당 사실을 인터넷 등에 공지하거나 고객에게 통지합니다. 다만, 회사가 통제할 수 없는 사유로 서비스의 중단(운영자의 고의, 과실이 없는 디스크 장애, 시스템 다운 등)으로 말미암아 미리 통지할 수 없을 때에는 사후에 통지합니다.
    제10조 (서비스 종류 및 이용요금)
    회사가 제공하는 서비스의 종류와 세부내용, 이용 요금은 별표 1. 서비스의 종류를 따릅니다.
    제3장 개인위치정보의 보호
    제11조 (위치정보의 정의 등)
    ① 본 약관에서 사용하는 “위치정보”란 이동성이 있는 물건 또는 개인이 특정한 시간에 존재하거나 존재했던 장소에 관한 정보로서 전기통신설비 및 전기통신회선설비를 이용하여 측위된 것을 말합니다.
    ② 본 약관에서 사용하는 “개인위치정보”란 특정 개인의 위치정보(위치정보만으로는 특정 개인의 위치를 알 수 없는 경우에도 다른 정보와 용이하게 결합하여 특정 개인의 위치를 알 수 있는 것을 포함한다)를 말합니다.
    ③ 회사는 본 약관에 동의하여 개인위치정보의 이용을 승낙한 고객에 한하여 위치정보법 등 관련 법률에서 정한 바에 따라 개인위치정보를 취득하며 서비스의 목적범위 내에서 위치정보를 이용합니다.
    제12조 (고객의 개인위치정보보호)
    회사는 관련 법령이 정하는 바에 따라 고객의 개인위치정보를 보호하기 위해 노력합니다.
    제13조 (개인위치정보의 이용 또는 제공)
    ① 회사는 서비스 제공을 위하여 회사가 수집한 고객의 위치정보를 이용할 수 있으며, 고객이 본 약관에 동의하면 위치정보 이용에 동의한 것으로 간주됩니다.
    ② 회사는 고객이 제공한 개인위치정보를 해당 고객의 동의 없이 서비스 제공 이외의 목적으로 이용하지 않습니다.
    ③ 회사는 아래 각호의 경우 고객이 지정한 휴대전화나 이메일(E-mail) 주소로 통보할 수 있습니다.
    
    1. 개인위치정보를 수집한 해당 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 않은 경우
    2. 개인위치정보 주체가 개인위치정보를 수집한 해당 외의 통신단말장치 또는 (E-mail) 주소 등으로 통보할 것을 요청한 경우
    ④ 회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신 단말장치로 회원에게 제공받는 자, 제공일시 및 제공목적을 매회 즉시 또는 위치정보 보호법의 범위 내에서 회사가 정한 주기 중 회원이 선택한 방식으로 통보합니다.
    
    단, 회사가 제3자에 대한 정보제공 내역을 주기적으로 모아서 통보할 경우에는 아래의 내용에 대해 알리고 고객의 동의를 받습니다.
    
    1. 정보제공내역을 모아서 통보하는 횟수 또는 기간
    2. 개인위치정보주체의 요청이 있는 경우에는 즉시 통보 방법으로 변경할 수 있다는 사실 및 그 요청 방법
    제14조 (개인위치정보 이용/제공사실 확인자료의 보유)
    ① 회사는 위치정보법 제16조 제2항에 근거하여 고객에 대한 위치정보 이용/제공사실 확인자료를 위치정보시스템에 자동으로 기록하며, 고객 불만에 응대하기 위하여 기록시점으로부터 6개월간 보존합니다.
    ② 위치정보법 제24조 제4항의 규정에 따라 고객이 동의의 전부 또는 일부를 철회하면 그 즉시 회사는 수집된 개인위치정보와 위치정보 이용제공사실 확인자료(동의의 일부를 철회할 때에는 철회하는 부분의 개인위치정보와 위치정보 이용제공사실 확인자료에 한합니다)를 파기합니다. 다만, 국세기본법, 법인세법, 부가가치세법, 기타 관계 법령의 규정에 따라 보존할 필요성이 있으면 관계 법령에 따라 보존합니다.
    제15조 (개인위치정보의 보유목적 및 보유기간)
    회사가 고객의 개인위치정보를 이용하였다면 회사는 위치정보법 제16조 제2항의 규정에 따라 기록·보존해야 하는 위치정보이용 제공사실 확인자료 이외의 해당 개인위치정보를 위치정보법 제23조에 따라 고객이 동의한 목적범위 내에서 이용하고 고객의 불만에 응대하기 위하여 6개월간 보유하며 6개월이 지나면 바로 파기합니다.
    제16조 (법정대리인의 권리)
    ① 회사가 위치정보법 제18조 제1항, 제19조 제1항 및 제2항 또는 제21조의 규정에 따라 14세 미만 아동의 개인위치정보를 이용하거나 제공하고자 할 때에는 그 법정 대리인의 동의를 얻어야 합니다.
    ② 제19조(고객의 권리)의 규정은 위치정보법 제25조 제2항의 규정에 따라 법정 대리인이 동의하는 경우에 이를 준용합니다. 이때 법정 대리인을 고객으로 봅니다.
    제17조 (8세 이하의 아동 등의 보호를 위한 위치정보 이용)
    ① 회사는 아래 각호 1에 해당하는 자(이하 "8세 이하의 아동 등")의 보호의무자가 8세 이하의 아동 등의 생명 또는 신체보호를 위하여 개인위치정보의 수집·이용 또는 제공에 동의하면 본인의 동의가 있는 것으로 봅니다.
    
    1. 8세 이하의 아동
    2. 피성년후견인
    3. 장애인복지법 제2조 제2항 제2호의 규정에 따른 정신적 장애를 가진 자로서 장애인 고용촉진 및 직업재활법 제2조 제2호의 규정에 따라 중증장애인에 해당하는 자(장애인복지법 제32조의 규정에 따라 장애인등록을 한 자에 한합니다.)
    ② 제1항의 규정에 따른 8세 이하 아동 등의 보호의무자는 해당 아동을 사실상 보호하는 자로서 다음 각 호의 1에 해당하는 자를 말합니다.
    
    1. 8세 이하의 아동의 법정 대리인 또는 보호시설에 있는 미성년자의 후견 직무에 관한 법률 제3조의 규정에 따른 후견인
    2. 피성년후견인의 법정 대리인
    3. 본 조 제1항 제3호의 자의 법정 대리인 또는 「장애인복지법」 제58조 제1항 제1호의 규정에 따른 장애인거주시설(국가 또는 지방자치단체가 설치·운영하는 시설에 한합니다)의 장, 정신건강증진 및 정신질환자 복지서비스 지원에 관한 법률 제22조의 규정에 따른 정신요양시설의 장 및 같은 법 제26조에 따른 정신재활시설(국가 또는 지방자치단체가 설치·운영하는 시설에 한합니다)의 장
    ③ 8세 이하 아동 등의 생명 또는 신체의 보호를 위하여 개인위치정보의 수집·이용 또는 제공에 동의하고자 하는 보호의무자는 서명동의서에 보호의무자임을 증명하는 서류를 첨부하여 회사에 제출해야 합니다.
    ④ 제19조(고객의 권리)의 규정은 위치정보법 제26조 제4항의 규정에 따라 보호의무자가 동의하는 경우에 이를 준용합니다. 이때 보호의무자를 고객으로 봅니다.
    제4장 회사와 고객의 권리 및 의무
    제18조 (회사의 의무)
    ① 회사는 서비스와 관련한 고객의 불만사항이 접수되면 이를 신속하게 처리해야 하며, 신속한 처리가 어려우면 그 사유와 처리 일정을 고객에게 통지합니다.
    ② 회사는 위치정보의 보호 및 이용 등에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법, 개인정보보호법 등 서비스의 운영·유지와 관련 있는 법규를 지킵니다.
    ③ 고객서비스를 더욱 활성화하여 최적화된 서비스를 제공하고 신상품이나 이벤트 정보 안내, 설문조사 등 고객 지향적인 마케팅을 수행하기 위하여 회사는 이용계약 체결 때 수집한 고객의 개인정보 및 서비스 이용과 관련한 정보를 활용할 수 있습니다. 단, 고객의 동의 범위를 초과하여 이용하거나 제3자에게 제공하고자 할 때에는 미리 해당 고객에게 동의를 받아야 합니다. 이때 고객은 회사의 동의 요청을 거절할 수 있습니다.
    ④ 회사는 요금연체와 관련하여 이용자를 신용정보의 이용 및 보호에 관한 법률 제17조의 신용정보집중기관 등 관계 기관 등에 신용 불량자로 등록 요청할 때에는 등록요청 대상자의 본인 여부 등 필요한 확인절차를 거쳐야 합니다.
    제19조 (고객의 권리)
    ① 고객은 유무선 인터넷 등을 통해 회사의 고객 개인위치정보의 이용과 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다.
    ② 고객은 유무선 인터넷 등을 통해 회사의 고객 개인위치정보의 이용과 제공의 일시 중지를 요구할 수 있습니다.
    ③ 고객은 회사에 다음 각 호의 1의 자료 등의 열람 또는 고지를 요구할 수 있고, 그 자료에 오류가 있으면 정정을 요구할 수 있습니다
    
    1. 고객에 대한 위치정보 수집·이용·제공 사실 확인자료
    2. 고객의 개인위치정보가 위치정보법 또는 다른 법률의 규정에 따라 제3자에게 제공된 이유와 그 내용
    ④ 고객은 본 약관 제21조에 기재된 회사의 주소, 연락처에 우편, 전화, 이메일(E-mail) 등을 발송하는 방법으로 서비스와 관련된 문의와 불만사항을 회사에게 제기하거나 그 시정을 요구할 수 있습니다.
    제20조 (고객의 의무)
    ① 고객은 서비스 이용계약에 따라 요금을 지정된 날짜까지 내야 하며, 회사에 알린 요금청구 주소와 연락처가 변경되었다면 해당 내용을 회사에 알려야 합니다.
    ② 고객이 서비스 이용에 필요한 제반 정보를 제공·등록할 때에는 현재의 사실과 일치하는 완전한 정보를 제공·등록해야 하며, 변경사항이 있으면 즉시 갱신해야 합니다.
    ③ 고객은 단말기가 정상 동작을 유지하도록 관리해야 하며, 단말기가 정상적으로 작동하지 않아 서비스 제공에 지장이 있을 때에는 해당 단말기의 보수, 교환 등을 신속히 처리하여 원활한 서비스가 이루어지도록 합니다.
    ④ 고객은 서비스를 이용할 때 다음 각 호의 1에 해당하는 행위를 해서는 안 됩니다.
    
    1. 가입신청 또는 변경 때 허위 사실을 기재하는 행위
    2. 타인의 명예를 손상하거나 타인에게 불이익을 주는 행위
    3. 공공질서와 미풍양속을 거스르는 내용의 정보·문장·도형·음성 등을 타인에게 유포하는 행위
    4. 서비스와 관련된 설비의 오동작이나 정보 등의 파괴·혼란을 유발하는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위
    5. 타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위
    6. 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 끼칠 목적으로 거짓된 정보를 유통하는 행위
    7. 서비스의 이용과 관련하여 취득한 타인의 개인위치정보를 무단으로 유용하거나 유출하는 행위
    8. 기타 불법적이거나 부당한 행위
    ⑤ 고객은 관계 법령, 이 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 회사가 통지하는 사항 등을 지켜야 하며, 기타 회사의 업무에 방해되는 행위를 해서는 안 됩니다.`;
    $('.check_textarea1').val(t1);
    $('.check_textarea2').val(t2);
}

function setRealtimevalidation() {
    $("#input_id").on("change keyup paste", function () {
        checkID();
        var id = $("#input_id").val();
        $.ajax({
            url: 'http://127.0.0.1:8000/account/id_duplicated_check/', //request 보낼 서버의 경로
            type: 'post', // 메소드(get, post, put 등)
            data: JSON.stringify({
                "id": id
            }), //보낼 데이터
            success: function (data) {
                //서버로부터 정상적으로 응답이 왔을 때 실행
                if (data.is_id_duplicated == true)
                    $('.id_dup_msg').css('visibility', 'visible');
                else
                    $('.id_dup_msg').css('visibility', 'hidden');
            },
            error: function (xhr, textStatus, thrownError) {
                alert(
                    "Could not send URL to Django. Error: " +
                    xhr.status +
                    ": " +
                    xhr.responseText
                );
            },
        });
    });

    $("#input_pwd").on("propertychange change keyup paste input", function () {
        checkPwd();
    });

    $("#input_repwd").on("propertychange change keyup paste input", function () {
        checkRePwd();
    });

    $("#input_name").on("propertychange change keyup paste input", function () {
        checkName();
    });
}

function setInputPhoneNum(){
    $("#input_phoneNum").keyup(function() { 
        $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
    });
}

function setPhoneNumVerify(){
    $('#send_verification_btn').click(function(){
        if(!checkID()||!checkName()||!checkPhoneNum())
            return ;
        let id = $('#input_id').val();
        let name = $('#input_name').val();
        let phonenum = $('#input_phoneNum').val();
        let newPhoneNum='';
        for(var i=0;i<phonenum.length;i++){
            if(phonenum[i]=='-')
                continue;
            newPhoneNum+=phonenum[i];
        }
        $.ajax({
            url: 'http://127.0.0.1:8000/account/send_SMS/', //request 보낼 서버의 경로
            type: 'post', // 메소드(get, post, put 등)
            data: JSON.stringify({
                "from":"register",
                "id": id,
                "name":name,
                "phone_num":newPhoneNum
            }), //보낼 데이터
            success: function (data) {
                //서버로부터 정상적으로 응답이 왔을 때 실행
                if (data.is_send == true)
                    varifyNum = data.num;
                else
                    alert("안되면 이상한건데 ");
            },
            error: function (xhr, textStatus, thrownError) {
                alert(
                    "Could not send URL to Django. Error: " +
                    xhr.status +
                    ": " +
                    xhr.responseText
                );
            },
        });
        $("#input_verifyNum").attr("disabled", false); 
        $("#verify_verification_btn").attr("disabled", false); 
    });
}

//* sign up checking
$('#signup_btn').click(function () {
    if (checkID() && checkPwd() && checkRePwd() && checkName() && checkAddress() && checkCheckbox()&& varifyflag) {
        console.log($("#sign_up_submit"))
        $("#sign_up_submit").trigger("click")

    }
});


$('#verify_verification_btn').click(function(){
    checkVerify();
});

function checkID() {
    var checkid = $('#input_id').val();
    var regExp = /^[a-z]+[a-z0-9]{4,19}$/g;
    if (!regExp.test(checkid)) {
        $('.id_err_msg').css('visibility', 'visible');
        $('#input_id').focus();
        return false;
    }
    return true;
}

function checkPwd() {
    var checkpwd = $('#input_pwd').val();
    var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!regExp.test(checkpwd)) {
        $('.pwd_err_msg').css('visibility', 'visible');
        $('.input_pwd_icon').css('visibility', 'visible');
        $('#input_pwd').focus();
        return false;
    }
    return true;
}

function checkRePwd() {
    var checkpwd = $('#input_pwd').val();
    var checkrepwd = $('#input_repwd').val();
    if (checkpwd != checkrepwd) {
        $('.repwd_err_msg').css('visibility', 'visible');
        $('#input_repwd').focus();
        return false;
    }
    return true;
}

function checkName() {
    var checkname = $('#input_name').val();
    var regExp = /[ㄱ-힣]/;
    if (!regExp.test(checkname)) {
        $('.name_err_msg').css('visibility', 'visible');
        $('#input_name').focus();
        return false;
    }
    return true;
}

function checkAddress() {
    var checkpost = $('#member_post').val();
    var checkaddress = $('#member_addr').val();
    var checkdetailaddress = $('#member_detail').val();
    if (!checkpost || !checkaddress || !checkdetailaddress) {
        $('.address_err_msg').css('visibility', 'visible');
        $('#member_detail').focus();
        return false
    }
    return true;
}

function checkCheckbox() {
    var checked = $('.check_all_btn').is(':checked');
    if (!checked) {
        $('.check_err_msg').css('visibility', 'visible');
        return false;
    }
    return true;
}

function checkPhoneNum(){
    var checkphonenum = $('#input_phoneNum').val();
    var regExp = /^(010|011|016|017|018|019)-[0-9]{3,4}-[0-9]{4}$/;
    if (!regExp.test(checkphonenum)) {
        $('.phonenum_err_msg').css('visibility', 'visible');
        $('#input_phoneNum').focus();
        return false;
    }
    return true;
}

function checkVerify(){
    let inputverify = $('#input_verifyNum').val();
    if(varifyNum==inputverify){
        varifyflag = true;
        $("#send_verification_btn").attr("disabled", true); 
        $("#input_verifyNum").attr("disabled", true); 
        $("#verify_verification_btn").attr("disabled", true); 
        alert("인증 성공");
    }
}

/* 주소정보 api*/
function findAddr() {
    new daum.Postcode({
        oncomplete: function (data) {

            console.log(data);

            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var jibunAddr = data.jibunAddress; // 지번 주소 변수
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('member_post').value = data.zonecode;
            if (roadAddr !== '') {
                document.getElementById("member_addr").value = roadAddr;
            }
            else if (jibunAddr !== '') {
                document.getElementById("member_addr").value = jibunAddr;
            }
        }
    }).open();
}
