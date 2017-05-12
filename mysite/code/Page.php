<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	private static $allowed_actions = array (
		'retrieveChampionsForm'
	);

	public function init() {
		parent::init();
		// You can include any CSS or JS required by your project here.
		// See: http://doc.silverstripe.org/framework/en/reference/requirements
	}

	public function redirectToLogin() {
		if (!Member::currentUserID()) {
			return $this->redirect('/login');
		}
	}

	public function index(SS_HTTPRequest $request) {
		// if($redirect = $this->redirectToLogin()) {
		// 	return $redirect;
		// }

		$champions = Champion::get()->sort('Name ASC');

		$data = array (
            'Champions' => $champions
        );

        // if($request->isAjax()) {
        // 	return $this->Customise($data)->renderWith('HomeImages');
        // };

        return $data;
	}

	public function retrieveChampionsForm() {
        $fields = new FieldList(
        );

        $actions = new FieldList(new FormAction('retrieveChampions', 'Run Code'));
        return new Form($this, 'retrieveChampionsForm', $fields, $actions, null);
    }

	public function retrieveChampions($data, $form) {
    	$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    // CURLOPT_URL => 'https://randomuser.me/api/'
		    CURLOPT_URL => 'https://euw1.api.riotgames.com/lol/static-data/v3/champions?champData=all&api_key=RGAPI-2bfd21e5-c70f-4062-95e5-e0217513e966',
		    CURLOPT_PORT => 8080
		));
		$jsonData = json_decode(curl_exec($curl));
		echo curl_getinfo($ch);
    	curl_close($curl);

    	foreach ($jsonData->data as $data) {
    		$id = $data->id;
    		$key = $data->key;
    		$name = $data->name;
    		$title = $data->title;

    		if($champion = DataObject::get_one("Champion", "KeyName = '".$key."'")) {
    			$champion->ChampionID = $id;
    			$champion->KeyName = $key;
    			$champion->Name = $name;
    			$champion->Title = $title;
	            $champion->write();
    		} else {
    			$newChampion = new Champion();
    			$newChampion->ChampionID = $id;
    			$newChampion->KeyName = $key;
	            $newChampion->Name = $name;
	            $newChampion->Title = $title;
	            $newChampion->write();
    		}
    	}
    	return $this->redirectBack();
    }
}
