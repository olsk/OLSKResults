<script>
const mod = {

	// VALUE

	TestItems: [],

	TestItemSelected: null,

	OLSKResultsEnableLooping: false,

	// MESSAGE

	OLSKResultsDispatchArrow (inputData) {
		mod.TestItemSelected = inputData;

		window.TestOLSKResultsDispatchArrow.innerHTML = parseInt(window.TestOLSKResultsDispatchArrow.innerHTML) + 1;
		window.TestOLSKResultsDispatchArrowData.innerHTML = inputData;
	},

	OLSKResultsDispatchClick (inputData) {
		mod.TestItemSelected = inputData;

		window.TestOLSKResultsDispatchClick.innerHTML = parseInt(window.TestOLSKResultsDispatchClick.innerHTML) + 1;
	},

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
	{ ...Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e, index, coll) {
		if (['OLSKResultsIgnoreKeyboard'].includes(e[0])) {
			e[1] = JSON.parse(e[1]);
		}

		return e;
	})) }
	>
	<div>{ item }</div>
	<em slot="OLSKResultsEmpty" class="TestOLSKResultsEmptySlot">TestItemsZero</em>
</Module>

<hr role="presentation" />

<p>
	<strong>OLSKResultsListItemSelected</strong>
	<button id="TestSetOLSKResultsListItemSelectedNull" on:click={ () => mod.TestItemSelected = null }>null</button>
	<button id="TestSetOLSKResultsListItemSelectedBravo" on:click={ () => mod.TestItemSelected = 'bravo' }>'bravo'</button>
	<span id="TestItemSelected">{ mod.TestItemSelected }</span>
</p>

<p>
	<strong>OLSKResultsListItems</strong>
	<button id="TestSetOLSKResultsListItemsZero" on:click={ () => mod.TestItems = [] }>Zero</button>
	<button id="TestSetOLSKResultsListItemsSingle" on:click={ () => mod.TestItems = ['alfa'] }>Single</button>
	<button id="TestSetOLSKResultsListItemsMultiple" on:click={ () => mod.TestItems = ['alfa','bravo','charlie'] }>Multiple</button>
</p>

<p>
	<strong>OLSKResultsEnableLooping</strong>
	<button on:click={ () => mod.OLSKResultsEnableLooping = !mod.OLSKResultsEnableLooping } id="TestSetOLSKResultsEnableLooping">Toggle</button>
	<span id="TestOLSKResultsEnableLooping">{ mod.OLSKResultsEnableLooping }</span>
</p>

<hr role="presentation" />

<p>
	<strong>OLSKResultsDispatchArrow</strong>
	<span id="TestOLSKResultsDispatchArrow">0</span>
	<span id="TestOLSKResultsDispatchArrowData">undefined</span>
</p>

<p>
	<strong>OLSKResultsDispatchClick</strong>
	<span id="TestOLSKResultsDispatchClick">0</span>
</p>

<style>
:global(.OLSKResultsListItemSelected) {
	background: #eee;
}
</style>
