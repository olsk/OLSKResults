<script>
const mod = {

	// MESSAGE

	OLSKResultsDispatchArrow (inputData) {
		mod.TestItemSelected = inputData;

		window.TestOLSKResultsDispatchArrow.innerHTML = parseInt(window.TestOLSKResultsDispatchArrow.innerHTML) + 1;
	},

	OLSKResultsDispatchClick (inputData) {
		mod.TestItemSelected = inputData;

		window.TestOLSKResultsDispatchClick.innerHTML = parseInt(window.TestOLSKResultsDispatchClick.innerHTML) + 1;
	},

	// VALUE

	TestItems: [],

	TestItemSelected: null,

	OLSKResultsEnableLooping: false,

};

import Module from './main.svelte';
</script>

<Module
	OLSKResultsListItems={ mod.TestItems }
	OLSKResultsListItemSelected={ mod.TestItemSelected }
	OLSKResultsDispatchArrow={ mod.OLSKResultsDispatchArrow }
	OLSKResultsDispatchClick={ mod.OLSKResultsDispatchClick }
	OLSKResultsEnableLooping={ mod.OLSKResultsEnableLooping }
	let:OLSKResultsListItem={ item }
	>
	<div>{ item }</div>
	<em slot="OLSKResultsEmpty" class="TestOLSKResultsEmptySlot">TestItemsZero</em>
</Module>

<hr>

<p>
	<strong>OLSKResultsListItemSelected</strong>
	<button id="TestSetOLSKResultsListItemSelected" on:click={ () => mod.TestItemSelected = 'bravo' }>Set</button>
	<span id="TestItemSelected">{ mod.TestItemSelected }</span>
</p>

<p>
	<strong>OLSKResultsListItems</strong>
	<button id="TestSetOLSKResultsListItemsZero" on:click={ () => mod.TestItems = [] }>Zero</button>
	<button id="TestSetOLSKResultsListItemsSingle" on:click={ () => mod.TestItems = ['alfa'] }>Single</button>
	<button id="TestSetOLSKResultsListItemsMultiple" on:click={ () => mod.TestItems = ['alfa','bravo','charlie'] }>Multiple</button>
</p>

<p>
	<strong>TestOLSKResultsEnableLooping</strong>
	<button on:click={ () => mod.OLSKResultsEnableLooping = !mod.OLSKResultsEnableLooping } id="TestSetOLSKResultsEnableLooping">Toggle</button>
	<span id="TestOLSKResultsEnableLooping">{ mod.OLSKResultsEnableLooping }</span>
</p>

<hr>

<p>
	<strong>TestOLSKResultsDispatchArrow</strong>
	<span id="TestOLSKResultsDispatchArrow">0</span>
</p>

<p>
	<strong>TestOLSKResultsDispatchClick</strong>
	<span id="TestOLSKResultsDispatchClick">0</span>
</p>

<style>
:global(.OLSKResultsListItemSelected) {
	background: #eee;
}
</style>
