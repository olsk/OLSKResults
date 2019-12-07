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

};

import Module from './main.svelte';
</script>

<Module
	OLSKResultsListItems={ mod.TestItems }
	OLSKResultsListItemSelected={ mod.TestItemSelected }
	OLSKResultsDispatchArrow={ mod.OLSKResultsDispatchArrow }
	OLSKResultsDispatchClick={ mod.OLSKResultsDispatchClick }
	let:OLSKResultsListItem={ item }
	>
	<div>{ item }</div>
	<em slot="OLSKResultsEmpty" class="TestOLSKResultsEmptySlot">TestItemsZero</em>
</Module>

<hr>

<p>
	<strong>TestItemSelected</strong>
	<button on:click={ () => mod.TestItemSelected = 'bravo' } id="TestSetTestItemSelected">Set</button>
	<span id="TestItemSelected">{ mod.TestItemSelected }</span>
</p>

<p>
	<strong>TestOLSKResultsDispatchArrow</strong>
	<span id="TestOLSKResultsDispatchArrow">0</span>
</p>

<p>
	<strong>TestOLSKResultsDispatchClick</strong>
	<span id="TestOLSKResultsDispatchClick">0</span>
</p>

<p>
	<strong>TestItems</strong>
	<button id="TestSetTestItemsZero" on:click={ () => mod.TestItems = [] }>Zero</button>
	<button id="TestSetTestItemsSingle" on:click={ () => mod.TestItems = ['alfa'] }>Single</button>
	<button id="TestSetTestItemsMultiple" on:click={ () => mod.TestItems = ['alfa','bravo','charlie'] }>Multiple</button>
</p>

<style>
:global(.OLSKResultsListItemSelected) {
	background: #eee;
}
</style>
