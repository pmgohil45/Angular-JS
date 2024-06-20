<?php
/*
Database Name: prakash
Table Name: product
Column Name: pid, pname, pdiscription, pprice

Note: You must've above data in your mysql database.
*/
	$con = new mysqli("localhost","root","","prakash");
	$sel = "select * from `product`";
	$res = $con -> query($sel);
	$records = array();
	if ($res->num_rows > 0) {
		// Output data of each row
		while($row = $res->fetch_assoc()) {
			$records[] = $row;
		}
	} else {
		$records = array();
	}
	// Return the records as a JSON object
	echo json_encode(array("records" => $records));
?>