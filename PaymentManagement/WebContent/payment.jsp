<%@ page import="model.PaymentModel"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>

<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Payment Service</title>
	<link rel="stylesheet" href="Views/bootstrap.min.css">
	<script src="Components/jquery-3.6.0.min.js"></script>
	<script src="Components/payment.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">

<h1>Payment Service</h1>
<form id="formPayment" name="formPayment">

	CardType :
	<input id="CardType" name="CardType" type="text"
				class="form-control form-control-sm">
	<br> 
	CardNumber:
	<input id="CardNumber" name="CardNumber" type="text" 
				class="form-control form-control-sm">
	<br> 
	CardHolderName:
	<input id="CardHolderName" name="CardHolderName" type="text" class="form-control form-control-sm">
	<br> 
	CVC:
	<input id="CVC" name="CVC" type="text" 
		class="form-control form-control-sm">
	<br>
	CardExpireDate:
	<input id="CardExpireDate" name="CardExpireDate" type="text" 
		class="form-control form-control-sm">
	<br>
	PaymentDate:
	<input id="PaymentDate" name="PaymentDate" type="text" 
		class="form-control form-control-sm">
	<br>
	BillID:
	<input id="BillID" name="BillID" type="text" 
		class="form-control form-control-sm">
	<br>
	<input id="btnSave" name="btnSave" type="button" value="Save" 
		class="btn btn-primary">
	<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
	
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>


<br>
<div id="divItemsGrid"> 
<%
PaymentModel itemObj = new PaymentModel();
 out.print(itemObj.getAllPayment());
%>
</div>

</div></div> </div>
</body>


</html>