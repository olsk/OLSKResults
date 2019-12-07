<script>
export let OLSKResultsListItems;
export let OLSKResultsListItemSelected;
export let OLSKResultsDispatchArrow;
export let OLSKResultsDispatchClick;

import OLSKResultsLogic from './ui-logic.js';

const mod = {

	// INTERFACE

	InterfaceWindowDidKeydown(event) {
		const handlerFunctions = {
			ArrowUp () {
				OLSKResultsDispatchArrow(OLSKResultsListItems[OLSKResultsLogic.OLSKResultsConstrainIndex(OLSKResultsListItems, OLSKResultsListItems.indexOf(OLSKResultsListItemSelected) - 1)]);

				return event.preventDefault();
			},
			ArrowDown () {
				OLSKResultsDispatchArrow(OLSKResultsListItems[OLSKResultsLogic.OLSKResultsConstrainIndex(OLSKResultsListItems, OLSKResultsListItems.indexOf(OLSKResultsListItemSelected) + 1)]);
				
				return event.preventDefault();
			},
		};

		handlerFunctions[event.code] && handlerFunctions[event.code]();
	},

};
</script>
<svelte:window on:keydown={ mod.InterfaceWindowDidKeydown } />

<div class="OLSKResults">

{#if OLSKResultsListItems.length}
	<div class="OLSKResultsList">
		{#each OLSKResultsListItems as e}
			<div class="OLSKResultsListItem" class:OLSKResultsListItemSelected={ e === OLSKResultsListItemSelected } on:click={ () => OLSKResultsDispatchClick(e) }>
				<slot OLSKResultsListItem={ e }></slot>
			</div>
		{/each}
	</div>
{:else}
	<div class="OLSKResultsEmpty">
		<slot name="OLSKResultsEmpty"></slot>
	</div>
{/if}

</div>

<style>
.OLSKResultsItem {
	cursor: pointer;
}
</style>
