<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Центр розвитку дітей - Лабараторія маленьких винахідників Хмельницький</title>
    <link rel="stylesheet" href="css/styles.css"/><link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>
<body>   
    <header class="milk-background header">
        <div class="header__menu__moving-part"> 
            <div class="header__menu flex">
                <div class="header__menu__logo"><a href="index.html">
                    <img src="img/header/Logo.svg" alt="Laboratory_malenkih_vihakhidnikiv_Khmalnytskiy"/></a>
                    <div class="burger"><span></span>
                </div>
            </div>
            <nav class="header__menu__container"> 
                <ul class="header__menu__elements flex">
                    <li class="header__menu__item__holder">
                        <a class="header__menu__item" href="index.html">Головна  </a>
                    </li>
                    <li class="header__menu__item__holder">
                        <a class="header__menu__item" href="kindergarten.html">Дитячий садок  </a>
                    </li>
                    <li class="header__menu__item__holder">
                        <ul class="header__menu__subitem__elements">
                            <li class="header__menu__subitem__holder">
                                <a class="header__menu__subitem__link" href="prepare.html">підготовка до школи  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="course.html">курс “Мама та малюк”  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="english.html">Англійська мова  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="logoped.html">логопед-дефектолог  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="art.html">Творчі майстер-класи  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="saturday.html">цікава субота  </a></li>
                                <li class="header__menu__subitem__holder"><a class="header__menu__subitem__link" href="genius.html">курс “маленькі генії”  </a></li>
                            </ul>
                            <a class="header__menu__item" href="#">Заняття  </a>
                        </li>
                        <li class="header__menu__item__holder"><a class="header__menu__item" href="index.html#levy">Ціни  </a></li>
                        <li class="header__menu__item__holder"><a class="header__menu__item" href="#photoalbum">Фотогалерея  </a></li><li class="header__menu__item__holder"><a class="header__menu__item" href="index.html#report">Відгуки  </a></li>
                        <li class="header__menu__item__holder"><a class="header__menu__item" href="contact.html">Контакти  </a></li></ul></nav><a class="global__btn header__menu__btn popupRegister" href="contact.html">Записати дитину</a>
                    </div>
                </div>
                    </header>
                    <main> 
                        <div class="milk-background" style="padding: 20vh 0;">

                            <h1 class="global__huge_text" style="max-width: 70vw; margin:auto">Дякуємо за запис! Протягом 12 годин вам зателефонує менеджер у робочий час.</h1>
<?php
try {
    $textMessage = "Something went wrong";
    if($_POST){
        $username = $_POST["username"];
        $phonenum = $_POST["usernum"];
        $textMessage = "\xE2\x9C\x89 У вас нове повідомлення:\n";      
        $textMessage .= "\xF0\x9F\x8C\xBB Ім'я клієнта: " . $username ."\n";
        $textMessage .= "\xE2\x98\x8E Номер телефону: " . $phonenum ."\n";        
        if (isset($_POST["userage"])){        
            $userage = $_POST["userage"];
            $textMessage .= "\xF0\x9F\x91\xB6 Вік дитини:" . $userage ."\n";
            
        }
        $usertask = $_POST["usertask"];
        $textMessage .= "\xE2\x9C\x8F Обраний курс: \n" . $usertask ."\n";     
    }
        set_time_limit(0.5);
        header("location: genius.php");    
} catch (\Throwable $th) {
    $textMessage = "ERROR IN MESSAGE";
}
    $token = "7729145108:AAH9V6PHJm7Qd7t3WZK3HD4Gzijcfi_bmLU"; // Token, generated by Bot Father
    $chat_id = 706037978; // Number of active chat from https://api.telegram.org/bot<Token>/getUpdates
    $textMessage = urlencode("$textMessage");
    // echo($textMessage);
    $urlQuery = "https://api.telegram.org/bot". $token ."/sendMessage?chat_id=". $chat_id ."&text=" . $textMessage;
    $result = file_get_contents($urlQuery);
?>
</main><footer class="footer"> 
    <div class="footer__contact milk-background">
        <div class="footer__contact_container flex">
            <div class="footer__contact_links"> 
                <a class="icon-link icon-link--phone" href="tel:+380984562045">+38 098 456 20 45</a>
                <a class="icon-link icon-link--email" href="mailto:labmalgen@gmail.com">labmalgen@gmail.com</a>
            </div>
            <div class="footer__contact_links-centered">
                <div class="footer__contact_links-social">
                    <a class="footer__contact_links-social-ref instagram" href="https://www.instagram.com/geniusesclub"></a>
                    <a class="footer__contact_links-social-ref facebook" href="https://www.facebook.com/geniusesclub15"></a>
                </div>
                <p class="footer__contact_links-copywright">
                    &copy; Лабораторія маленьких геніїв 2015-2024. Усі права захищені
                </p>
            </div>
            <div class="footer__contact_links-left">
                <div class="footer__contact_links__logo">
                    <a href="index.html">
                        <img src="img/header/Logo.svg" alt="Laboratory_malenkih_vihakhidnikiv_Khmalnytskiy"/>
                    </a>
                </div>
                <a class="footer__contact_links-left--politic" href="#">Політика конфіденційності</a>
            </div>
        </div>
    </div>
</footer>
<div class="popup_background">
    <div class="popup">
        <div class="popup-dialog-close"></div>
        <div class="mill-background"> Ви вже зробили запис, найближчим часом менеджер вам передзвонить </div>
    </div>
</div>
<script src="js/scripts.js"></script>
</body>
</html>