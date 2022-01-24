var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
/* var params = window.location.search.replace('?','').split('&').reduce(
  function(p,e) {
    var par = e.split('=');
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
  },
  {}
); */


var link = new URL(window.location.href);
var site = link.searchParams.get("site");
var sid1 = link.searchParams.get("sid1");
var source = link.searchParams.get("source");
var clientId = link.searchParams.get("client_id");
var uid = link.searchParams.get("uid");

$(function () {
    $("#omni_form").removeAttr('method');
    $("#omni_form").attr('method', 'post');
    $("#omni_form").removeAttr('action');
    $("#omni_form").attr('action', '../ruletka_php/omni/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#p_omni_form").removeAttr('method');
    $("#p_omni_form").attr('method', 'post');
    $("#p_omni_form").removeAttr('action');
    $("#p_omni_form").attr('action', '../ruletka_php/omni/p_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#shakes_form").removeAttr('action');
    $("#shakes_form").attr('action', '../ruletka_php/shakes/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#apilead_form").removeAttr('action');
    $("#apilead_form").attr('action', '../ruletka_php/apilead/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#drcash_form").removeAttr('action');
    $("#drcash_form").attr('action', '../ruletka_php/drcash/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#t_drcash_form").removeAttr('action');
    $("#t_drcash_form").attr('action', '../ruletka_php/drcash/t_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#adeptcpa_form").removeAttr('action');
    $("#adeptcpa_form").attr('action', '../ruletka_php/adeptcpa/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#scpa_pw_drcash_form").removeAttr('action');
    $("#scpa_pw_drcash_form").attr('action', '../ruletka_php/drcash/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#leadtrade_form").removeAttr('action');
    $("#leadtrade_form").attr('action', '../ruletka_php/leadtrade/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#scpa_pw_leadtrade_form").removeAttr('action');
    $("#scpa_pw_leadtrade_form").attr('action', '../ruletka_php/leadtrade/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#rocket_form").removeAttr('action');
    $("#rocket_form").attr('action', '../ruletka_php/rocket/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#hp_form").removeAttr('method');
    $("#hp_form").attr('method', 'post');
    $("#hp_form").removeAttr('action');
    $("#hp_form").attr('action', '../ruletka_php/hp/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#p_hp_form").removeAttr('method');
    $("#p_hp_form").attr('method', 'post');
    $("#p_hp_form").removeAttr('action');
    $("#p_hp_form").attr('action', '../ruletka_php/hp/p_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#scpa_pw_hp_form").removeAttr('method');
    $("#scpa_pw_hp_form").attr('method', 'post');
    $("#scpa_pw_hp_form").removeAttr('action');
    $("#scpa_pw_hp_form").attr('action', '../ruletka_php/hp/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#pw_hp_form").removeAttr('method');
    $("#pw_hp_form").attr('method', 'post');
    $("#pw_hp_form").removeAttr('action');
    $("#pw_hp_form").attr('action', '../ruletka_php/hp/sergeycpa_bushkost.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#ad1_form").removeAttr('action');
    $("#ad1_form").attr('action', '../ruletka_php/ad1/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#scpa_pw_ad1_form").removeAttr('action');
    $("#scpa_pw_ad1_form").attr('action', '../ruletka_php/ad1/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#m_leads").removeAttr('method');
    $("#m_leads").attr('method', 'post');
    $("#m_leads").removeAttr('action');
    $("#m_leads").attr('action', '../ruletka_php/m4leads/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#kma_form").removeAttr('method');
    $("#kma_form").attr('method', 'post');
    $("#kma_form").removeAttr('action');
    $("#kma_form").attr('action', '../ruletka_php/kma/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');
	
	$("#reg_kma_form").removeAttr('method');
    $("#reg_kma_form").attr('method', 'post');
    $("#reg_kma_form").removeAttr('action');
    $("#reg_kma_form").attr('action', '../ruletka_php/kma/reg_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#funcpa_form").removeAttr('method');
    $("#funcpa_form").attr('method', 'post');
    $("#funcpa_form").removeAttr('action');
    $("#funcpa_form").attr('action', '../ruletka_php/fun_cpa/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#adbees_form").removeAttr('method');
    $("#adbees_form").attr('method', 'post');
    $("#adbees_form").removeAttr('action');
    $("#adbees_form").attr('action', '../ruletka_php/adbees/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#leadbit_form").removeAttr('method');
    $("#leadbit_form").attr('method', 'post');
    $("#leadbit_form").removeAttr('action');
    $("#leadbit_form").attr('action', '../ruletka_php/leadbit/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#cpagetti_form").removeAttr('method');
    $("#cpagetti_form").attr('method', 'post');
    $("#cpagetti_form").removeAttr('action');
    $("#cpagetti_form").attr('action', '../ruletka_php/cpagetti/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#monsterleads_form").removeAttr('method');
    $("#monsterleads_form").attr('method', 'post');
    $("#monsterleads_form").removeAttr('action');
    $("#monsterleads_form").attr('action', '../ruletka_php/monsterleads/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#tl_form").removeAttr('method');
    $("#tl_form").attr('method', 'post');
    $("#tl_form").removeAttr('action');
    $("#tl_form").attr('action', '../ruletka_php/tl/send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#burg_tl_form").removeAttr('method');
    $("#burg_tl_form").attr('method', 'post');
    $("#burg_tl_form").removeAttr('action');
    $("#burg_tl_form").attr('action', '../ruletka_php/tl/send_burg.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#scpa_pw_tl_form").removeAttr('method');
    $("#scpa_pw_tl_form").attr('method', 'post');
    $("#scpa_pw_tl_form").removeAttr('action');
    $("#scpa_pw_tl_form").attr('action', '../ruletka_php/tl/ph_sergeycpa_send.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '');

    $("#everad_form").removeAttr('method');
    $("#everad_form").removeAttr('action');

    $("#everad_form_tha").removeAttr('method');
    $("#everad_form_tha").removeAttr('action');

    $("#everad_form_reg5").removeAttr('method');
    $("#everad_form_reg5").removeAttr('action');
});

$(function () {
    if ($("form").is("#omni_form") || $("form").is("#p_omni_form")) {
        $('head').append('<script src="//metrics0.com/bRIvit5XlD/d.js"></script>');
        $('body').append('<script src="../ruletka_php/phone.js"></script>');
    }
});

$(function () {

    if ($("form").is("#monsterleads_form")) {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#traffic_type").val("1");
        } else {
            $("#traffic_type").val("2");
        }

    }

});

$(function () {

    if ($("form").is("#everad_form")) {
        $("#everad_form").removeAttr("method");
        $("#everad_form").removeAttr("action");

        $("#everad_form").submit(function (e) {
            e.preventDefault();

            let serializeData = $("#everad_form").serializeArray();
            let data = {};

            $(serializeData).each(function (i, field) {
                data[field.name] = field.value;
            });

            $.post("/ruletka_php/everad/send.php",
                {
                    name: data.name,
                    phone: data.phone,
                    campaign_id: data.campaign_id,
                    sid1: data.sid1
                },
                function (response) {
                    if (response == 200) {
                        window.location.href = '/ruletka_php/thanks/everad/success.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '';
                    } else if (response == 400) {
                        document.getElementById("everad_form").reset();
                        alert("Введены неверные данные!");
                    } else {
                        document.getElementById("everad_form").reset();
                        alert("Произошла ошибка!");
                    }
                }
            );

        });
    }

});


$(function () {

    if ($("form").is("#everad_form_tha")) {
        $("#everad_form_tha").removeAttr("method");
        $("#everad_form_tha").removeAttr("action");

        $("#everad_form_tha").submit(function (e) {
            e.preventDefault();

            let serializeData = $("#everad_form_tha").serializeArray();
            let data = {};

            $(serializeData).each(function (i, field) {
                data[field.name] = field.value;
            });

            $.post("/ruletka_php/everad/send.php",
                {
                    name: data.name,
                    phone: data.phone,
                    campaign_id: data.campaign_id,
                    sid1: data.sid1
                },
                function (response) {
                    if (response == 200) {
                        window.location.href = '/ruletka_php/thanks/everad/success_tha.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '';
                    } else if (response == 400) {
                        document.getElementById("everad_form_tha").reset();
                        alert("Введены неверные данные!");
                    } else {
                        document.getElementById("everad_form_tha").reset();
                        alert("Произошла ошибка!");
                    }
                }
            );

        });
    }

});


$(function () {

    if ($("form").is("#everad_form_reg5")) {
        $("#everad_form_reg5").removeAttr("method");
        $("#everad_form_reg5").removeAttr("action");

        $("#everad_form_reg5").submit(function (e) {
            e.preventDefault();

            let serializeData = $("#everad_form_reg5").serializeArray();
            let data = {};

            $(serializeData).each(function (i, field) {
                data[field.name] = field.value;
            });

            $.post("/ruletka_php/everad/send_reg5.php",
                {
                    name: data.name,
                    phone: data.phone,
                    campaign_id: data.campaign_id,
                    sid1: data.sid1
                },
                function (response) {
                    if (response == 200) {
                        window.location.href = '/ruletka_php/thanks/everad/success.php?site=' + site + '&sid1=' + sid1 + '&source=' + source + '&client_id=' + clientId + '&uid=' + uid + '';
                    } else if (response == 400) {
                        document.getElementById("everad_form_reg5").reset();
                        alert("Введены неверные данные!");
                    } else {
                        document.getElementById("everad_form_reg5").reset();
                        alert("Произошла ошибка!");
                    }
                }
            );

        });
    }

});

$(function () {
    let isFree = Number($('input[name="price"]').val());

    if ($("form").is("#hp_form") || $("form").is("#p_hp_form") || $("form").is("#pw_hp_form")) {

        if (source == 2) {
            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="medicineteaser">');
        } else if (source == 11) {
            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="Vitrina">');
        } else if (source == 10) {
            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="Pushprofit">');
        } else {
            $('input[name="price"]').after('<input type="hidden" name="sub_id2" value="other">');
        }

        if (isFree === 0) {
            $('.pop-up-text').append('<br><span class="text_small">*при заказе полного курса</span>');
        }

    }
});

$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });
    $('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click(function () {
        $('.eeee, .fadepopup').css('display', 'none');
    });
});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    var top = $('#roulette').offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}
