<script>
export let OLSKResultsListItems;
export let OLSKResultsListItemSelected;
export let OLSKResultsDispatchArrow;
export let OLSKResultsDispatchClick;
export let OLSKResultsEnableLooping = false;
export let OLSKResultsIgnoreKeyboard = false;

import OLSKResultsLogic from './ui-logic.js';

const mod = {

	// INTERFACE

	InterfaceWindowDidKeydown(event) {
		if (OLSKResultsIgnoreKeyboard) {
			return;
		}
		
		if (!OLSKResultsListItems.length) {
			return;
		}

		const handlerFunctions = {
			ArrowUp () {
				(function() {
					if (!OLSKResultsEnableLooping && OLSKResultsListItems[0] === OLSKResultsListItemSelected) {
						return;
					}
					
					mod.ControlArrowIncrement(-1);
				})();

				return event.preventDefault();
			},
			ArrowDown () {
				(function() {
					if (!OLSKResultsEnableLooping && (OLSKResultsListItems.slice(-1).pop() === OLSKResultsListItemSelected)) {
						return;
					}

					mod.ControlArrowIncrement(1);
				})();
				
				return event.preventDefault();
			},
		};

		handlerFunctions[event.code] && handlerFunctions[event.code]();
	},

	// CONTROL

	ControlArrowIncrement (inputData) {
		OLSKResultsDispatchArrow(OLSKResultsListItems[OLSKResultsLogic.OLSKResultsConstrainIndex(OLSKResultsListItems, OLSKResultsListItems.indexOf(OLSKResultsListItemSelected) + inputData)]);
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
.OLSKResultsListItem {
	cursor: pointer;
}
</style>
