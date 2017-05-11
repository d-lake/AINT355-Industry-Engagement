<?php
class Champion extends DataObject {    
    private static $db = array(
        'ChampionID' => 'Int',
        'KeyName' => 'Varchar(255)',
        'Name' => 'Varchar(255)',
        'Title' => 'Varchar(255)',
    );

    public function imgURL() {
        return "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".$this->KeyName."_0.jpg";
    }
}