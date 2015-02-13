App = Ember.Application.create();

App.Router.map(function() {
	this.resource('root',{path:'/'},function(){	
  this.resource('users',{path:'/users'},function(){
  		this.resource('user',{path:'/:user_id'});
  });
  this.resource('projects',{path:'/projects'},function(){
   		this.resource('project',{path:'/:project_id'});
});
  this.resource('companies',{path:'/companies'},function(){
		this.resource('company',{path:'/:company_id'});
	});
  	});
  });

App.ApplicationController=Ember.Controller.extend({
	about:false,
	actions:{
	toprojects:function(){
    	this.transitionTo('projects');
    },
    tousers:function(){
    	this.transitionTo('users');
    },
    tohome:function(){
    	this.transitionTo('root');
    },
    toindex:function(){
    	this.toggleProperty('about');
    },
    tocompanies:function(){
    	this.transitionTo('companies');
    }
	}
});

App.CompaniesRoute=Ember.Route.extend({
	model:function(){
	return $.getJSON("data.json").then(function(obj){
		return obj.companies;
	});
}
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexView = Ember.View.extend({
	name:'Mamdouh',
	say:'Hello'
});

App.ApplicationRoute=Ember.Route.extend({
	model:function(){
	return $.getJSON("data.json").then(function(obj){
		return obj.users;
	});
}
});

App.IndexController=Ember.Controller.extend({
names: ["Ali", "Mamdouh","Egypt","K.S.A"],

 actions: {
    turnItUp: function(level){
      alert(level);
    }
  }
});

App.ClickableView = Ember.View.extend({
  //click: function(evt) {
  //  alert("ClickableView was clicked!");
  //}
  click: function(evt) {
    this.get('controller').send('turnItUp', 11);
  }
});
App.UsersRoute=Ember.Route.extend({
model:function(){
	return $.getJSON("data.json").then(function(obj){
		return obj.users;
	});
}
});
App.ProjectsRoute=Ember.Route.extend({
	model:function(){
		return $.getJSON("data.json").then(function(obj){
		return obj.projects;
	});
}
});
App.UserRoute=Ember.Route.extend({
	model:function(params){
		return $.getJSON("data.json").then(function(obj){
		return obj.users[params.user_id];
	});	}
});
App.CompanyRoute=Ember.Route.extend({
	model:function(params){
		return $.getJSON("data.json").then(function(obj){
		return obj.companies[params.company_id] ;
	});	}
});
//App.CompanyController=Ember.Controller.extend({
	//title: "ruby"
//});

App.ProjectRoute=Ember.Route.extend({
	model:function(params){
		return $.getJSON("data.json").then(function(obj){
		return obj.projects[params.project_id];
	});	}
});

App.secondsOnPage=1;
App.variable=10;
setInterval(function(){	
	App.set('secondsOnPage',App.get('secondsOnPage')+1);
	App.set('variable',App.get('variable')*2);},10000);

