function cambio_color(id)
{
	//document.getElementById(id).style.backgroundColor= "rgb(168, 195, 120)";
	//alert(id);
	document.getElementById(id).style.backgroundColor= "#5F732F";
}

function original(id)
{
	document.getElementById(id).style.backgroundColor= "#333333";
}

function link(id)
{
    document.getElementById(id).style.backgroundColor= "#333333";

	if(id=='linkedin')
		{
			location.href ="https://www.linkedin.com/in/jose-luggren";
		}
	if(id=='github')
		{
			location.href ="https://github.com/JoseLuggren";
		}





}