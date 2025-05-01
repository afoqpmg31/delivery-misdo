// JavaScript Document
function ChangePicture(strImageName, strUrl)
{
	document.images[strImageName].src = strUrl;
}



function mouseOverHandler(target)
{
	target.src = target.src.replace("_1.jpg", "_2.jpg");
}

function mouseOutHandler(target)
{
	target.src = target.src.replace("_2.jpg", "_1.jpg");
}



// JavaScript Document

function mouseOverHandlerGIF(target)
{
	target.src = target.src.replace("_1.gif", "_2.gif");
}

function mouseOutHandlerGIF(target)
{
	target.src = target.src.replace("_2.gif", "_1.gif");
}


// JavaScript Document

function mouseOver(target)
{
	target.src = target.src.replace(".gif", "_over.gif");
}
function mouseDown(target)
{
	target.src = target.src.replace("_over.gif", "_on.gif");
}
function mouseUp(target)
{
	target.src = target.src.replace("_on.gif", ".gif");
}
function mouseOut(target)
{
	target.src = target.src.replace("_over.gif", ".gif");
}
function mouseMove(target)
{
	target.src = target.src.replace("_on.gif", ".gif");
}


// JavaScript Document

function mouseOverHandlerPNG(target)
{
	target.src = target.src.replace("_1.png", "_2.png");
}

function mouseOutHandlerPNG(target)
{
	target.src = target.src.replace("_2.png", "_1.png");
}