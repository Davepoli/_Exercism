export const colorCode = (color) => {
	let COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
	return COLORS.indexOf(color);
	// ALEBO return(COLORS.findIndex(function(e){return e == color}));//
}
