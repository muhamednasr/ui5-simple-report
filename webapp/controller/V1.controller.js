sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function(Controller, MessageToast, Filter, FilterOperator) {
		"use strict";
		return Controller.extend("SCM.controller.V1", {

			onInit: function() {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("MainT").attachPatternMatched(this._onObjectMatched, this);
			
			},

			onPress: function(oEvent) {

			},

			_onObjectMatched: function(oEvent) {

				var oModel = this.getView().getModel("TempDataModel");

				var deptfrom = oModel.getProperty("/deptFrom");
				var deptto = oModel.getProperty("/deptTo");
				var partfrom = oModel.getProperty("/partFrom");
				var partto = oModel.getProperty("/partTo");
				var datefrom = oModel.getProperty("/dateFrom");
				var dateto = oModel.getProperty("/dateTo");

				var oFilter = [];

				if (deptfrom !== "" & deptto !== "") {

					oFilter = new Filter({
						filters: [
							new Filter({
								path: 'Fineid',
								operator: FilterOperator.BT,
								value1: deptfrom,
								value2: deptto
							}),
							new Filter({
								path: 'Actdat',
								operator: FilterOperator.BT,
								value1: datefrom,
								value2: dateto
							})
							],
							and: true
					});
				} else if (deptfrom !== "" & deptto === "") {

					oFilter = new Filter({
						filters: [
							new Filter({
								path: 'Fineid',
								operator: FilterOperator.EQ,
								value1: deptfrom
							})
						]
					});
				}

				var list = this.getView().byId('idTable').getBinding("items");

				list.filter(oFilter);
			}

		});
	});