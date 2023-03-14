<?php

$link = mysqli_connect('localhost','users','');

if($link == false){
    print("error");
}
else {
    mysqli_query($link, '');
}

?>