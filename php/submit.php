<?php
header('Access-Control-Allow-Origin: *');
 mysql_connect("localhost", "siwserver", "v0E6JICT8fjF");
 mysql_select_db("customer_details");
if(isset($_POST['type']))
{
    $res = [];
    if($_POST['type'] == "input"){
        $date = $_POST ['dateInput'];
        $injury = $_POST ['injuryInput'];
        $description = $_POST ['descriptionInput'];
        $query1 = "INSERT INTO [ScienceInjuryWatchlist].[siwdata](dateOfInjury, nameOfInjury, description) values ('$date', '$injury, '$description')";
        $result1 = mysql_query($query1);
        if ($result1)
        {
            $res["flag"] = true;
            $res["message"] = "Data inserted successfully";
        }
        else 
        {
            $res["flag"] = false;
            $res["message"] = "Data not inserted successfully";
        
        }
    }
}
else 
{
    $res["flag"] = false;
    $res["message"] = "Invalid format";
}
    echo json_encode($res);

?>