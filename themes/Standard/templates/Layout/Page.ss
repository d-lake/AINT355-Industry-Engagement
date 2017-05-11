<% include header %>
<div id="Home">
	<div class="container no-padding">
		<ul class="nav nav-tabs main-nav" role="tablist">
		    <li role="presentation" class="active"><a href="#dashboard" aria-controls="dashboard" role="tab" data-toggle="tab">Dashboard</a></li>
		    <li role="presentation"><a href="#summoners" aria-controls="summoners" role="tab" data-toggle="tab">Summoners</a></li>
		    <li role="presentation"><a href="#champions" aria-controls="champions" role="tab" data-toggle="tab">Champions</a></li>
		</ul>
	 
		<div class="tab-content main-tabs">
		    <div role="tabpanel" class="tab-pane active" id="dashboard"><% include dashboard %></div>
		    <div role="tabpanel" class="tab-pane" id="summoners"><% include summoners %></div>
		    <div role="tabpanel" class="tab-pane" id="champions"><% include champions %></div>
	  	</div>
	</div>
</div>
