<?php

$process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);

foreach ($process as $key=>$val){

    foreach ($val as $k => $v){

        unset($process[$key][$k]);

        if (is_array($v)){
            $process[$key][stripslashes($k)] = $v;
            $process[] = &$process[$key][stripslashes($k)];
        } else {
            $process[$key][stripslashes($k)] = stripslashes($v);
        }

    }

}

unset($process);