function Product(id, name, price, description, img) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.description = description;
	this.img = img;
}

Product.prototype.createNode = function () {
	var divProduct = document.createElement("div");
	divProduct.setAttribute("float", "left");
	var imgProduct = document.createElement("img");
	imgProduct.setAttribute("src", this.img);
	divProduct.appendChild(imgProduct);
	
	var nameProduct = document.createElement("span");
	nameProduct.innerHTML = this.name;
	divProduct.appendChild(nameProduct);

	return divProduct;
}
