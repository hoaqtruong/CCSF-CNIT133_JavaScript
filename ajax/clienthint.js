var xmlHttp

function showHint(str)
{
if (str.length==0)
  { 
    document.getElementById("txtHint").innerHTML="";
      return;
	}
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	  {
	    alert ("Your browser does not support AJAX!");
	      return;
		} 
		/*  if use asp
		var url="gethint.asp";
		*/
		/* if use php  */
		var url="./gethint.php";
		url=url+"?q="+str;
		url=url+"&sid="+Math.random();
		xmlHttp.onreadystatechange=stateChanged;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
		} 

		function stateChanged() 
		{ 
		   if (xmlHttp.readyState==4)
		      { 
			    document.getElementById      ("txtHint").innerHTML=xmlHttp.responseText;
			       }
			       }

			       function GetXmlHttpObject()
			       {
			       var xmlHttp=null;
			       try
				 {
				   // Firefox, Opera 8.0+, Safari
				     xmlHttp=new XMLHttpRequest();
				       }
				       catch (e)
					 {
					   // Internet Explorer
					     try
						 {
						     xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
							 }
							   catch (e)
							       {
								   xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
								       }
									 }
									 return xmlHttp;
									 }

