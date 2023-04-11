<?php
$cn = pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=bolik120");
if($cn){
    echo "connected";
}
?>