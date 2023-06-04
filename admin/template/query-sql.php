<?php
require __DIR__. '/../../config/database.php';


function is_table_empty()
{
    $query="SELECT id FROM google_oauth WHERE provider = 'google'";
    $mysqli->query($query);
}
function get_access_token() {
    $query ="SELECT provider_value FROM google_oauth WHERE provider = 'google'";
    $mysqli->query($query);
    $result= $query->fetch_assoc();
    return json_decode($result['provider_value']);
}

function get_refersh_token(){
    $result = $this->get_access_token();
    return $result->refresh_token;
}

function update_access_token($token) {
    if($this->is_table_empty()) {
        $query="INSERT INTO google_oauth(provider, provider_value) VALUES('google', '$token')";
        $mysqli->query($query);
    }else {
        $query = "UPDATE google_oauth SET provider_value = '$token' WHERE provider = 'google'";
        $mysqli->query($query);
    }
}
