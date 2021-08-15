sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller,UIComponent) {
	"use strict";

	return Controller.extend("SCM.controller.main_page", {

			onInit: function() {
				//UIComponent.prototype.init.apply();
		         return UIComponent.getRouterFor(this);
			},
			
			getRouter: function(){
				//this.getRouter.ini
				return this.getOwnerComponent().getRouter();
			},

		onPress: function(oEvent){
			var oRouter = UIComponent.getRouterFor(this);
			var deptFrom = this.getView().byId("Dpfrom").getValue();
			var deptTo = this.getView().byId("Dpto").getValue();
			var partFrom = this.getView().byId("partfrom").getValue();
			var partTo = this.getView().byId("partto").getValue();
			var datefrom = this.getView().byId("dfrom").getValue();
			var dateto  = this.getView().byId("dto").getValue();
			
			var oModel = this.getView().getModel("TempDataModel");
		    var oData = {
		    	
		    	"deptFrom":deptFrom,
		    	"deptTo":deptTo,
		    	"partFrom":partFrom,
		    	"partTo":partTo,
		    	"dateFrom":datefrom ,
		    	"dateTo":dateto
		    	
		    };
		
		    oModel.setData(oData);

			if (deptFrom === "" & deptTo === "" & partFrom === "" & partTo === ""  ){
				oRouter.navTo("MainT",{id:5});
			}
				 
			else if (deptFrom !== ""){
				oRouter.navTo("MainT",{id:deptFrom});
			}
			
			
			
		}
	});

});