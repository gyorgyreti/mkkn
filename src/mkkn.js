define([
    "js/core",

    "js/elements/layout",

    "js/dialogs/selectAction",
    "js/dialogs/wait",
    "js/dialogs/selectTrigger",
    "js/dialogs/newAutomationName",
    "js/dialogs/selectFormTrigger",

    "js/core/init",
    "js/core/ready",
    "js/core/layoutReady",
    "js/core/runTheFunctions",
    "js/core/loadPlugins",
    "js/core/scriptLoaded",

    "js/functions/open",
    "js/functions/close",
    "js/functions/newDiagram",
    "js/functions/activeElement",
    "js/functions/widget",
    "js/functions/title",

    "js/functions/xhr/refreshCustomFields",
    "js/functions/xhr/refreshNewsletters",
    "js/functions/xhr/refreshForms",

    "js/modules/diagram",
    "js/modules/node",
    "js/modules/element",
    "js/modules/actionSelector",
    "js/modules/actions/customField",
    "js/modules/actions/Mail"
], function ($AAE) {
    console.log('%c AutomizyAutomationEditor loaded! ', 'background: #000000; color: #bada55; font-size:14px');
    return $AAE;
});
