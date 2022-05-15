$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateItemForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid------------------------
 $("#formPayment").submit();
});
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
 $("#hidPaymentIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
 $("#CardType").val($(this).closest("tr").find('td:eq(0)').text());
 $("#CardNumber").val($(this).closest("tr").find('td:eq(1)').text());
 $("#CardHolderName").val($(this).closest("tr").find('td:eq(2)').text());
 $("#CVC").val($(this).closest("tr").find('td:eq(3)').text());
 $("#CardExpireDate").val($(this).closest("tr").find('td:eq(4)').text());
 $("#PaymentDate").val($(this).closest("tr").find('td:eq(5)').text());
 $("#BillID").val($(this).closest("tr").find('td:eq(6)').text());
});
// CLIENT-MODEL================================================================
function validateItemForm()
{
// CODE
if ($("#CardType").val().trim() == "")
 {
 return "Insert Item Code.";
 }
// NAME
if ($("#CardNumber").val().trim() == "")
 {
 return "Insert Item Name.";
 } 
 // PRICE-------------------------------
if ($("#CardHolderName").val().trim() == "")
 {
 return "Insert Item Price.";
 }
 if ($("#CVC").val().trim() == "")
 {
 return "Insert Item Price.";
 }
 if ($("#CardExpireDate").val().trim() == "")
 {
 return "Insert Item Price.";
 }
 if ($("#PaymentDate").val().trim() == "")
 {
 return "Insert Item Price.";
 }
 if ($("#BillID").val().trim() == "")
 {
 return "Insert Item Price.";
 }
// is numerical value
var tmpBillID = $("#BillID").val().trim();
if (!$.isNumeric(tmpBillID))
 {
 return "Insert a numerical value for Item Price.";
 }

 
return true;
}

 