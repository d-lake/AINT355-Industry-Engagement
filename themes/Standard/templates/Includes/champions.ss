<div id="Champions">
	<div class="grid-container">
		<div class="grid">
			<div class="grid-sizer"></div>
			<% loop $Champions %>
				<div class="grid-item">
					<div class="img-container">
				         <a href="#" data-champion-id="$ChampionID" data-champion-name="$Name" data-toggle="modal" data-target="#Champion_Modal">
				         	<img src="$imgURL">
				         </a>
					</div>
				</div>
			<% end_loop %>
		</div>
	</div>

	$retrieveChampionsForm

	<div class="upload modal fade" id="Champion_Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<a class="modal-close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></a>
	  <div class="modal-dialog modal-xl" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h4 class="modal-title" id="myModalLabel"></h4>
	      </div>
	      <div class="modal-body">
	      	<ul class="nav nav-tabs" role="tablist">
			    <li role="presentation" class="active"><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overveiw</a></li>
			    <li role="presentation"><a href="#abilities" aria-controls="abilities" role="tab" data-toggle="tab">Abilities</a></li>
			    <li role="presentation"><a href="#skins" aria-controls="skins" role="tab" data-toggle="tab">Skins</a></li>
			</ul>
		 
			<div class="tab-content">
			    <div role="tabpanel" class="tab-pane active" id="overview"></div>
			    <div role="tabpanel" class="tab-pane" id="abilities"></div>
			    <div role="tabpanel" class="tab-pane" id="skins"></div>
		  	</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" data-dismiss="modal" data-for="ProfileUpload" data-remove-files>Close</button>
	      </div>
	    </div>
	  </div>
	</div>

</div>