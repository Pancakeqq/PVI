<?php




function getStudents(){

    $conn = pg_connect("host=192.168.82.215 port=5432 dbname=Students user=postgres password=bolik120");

    // Define the SELECT query
    $query = 'SELECT * FROM "Students"';
    
    // Execute the query
    $result = pg_query($conn, $query);

    

    // Check if the query executed successfully
    if (!$result) {
        echo "An error occurred.\n";
        exit;
    }
    
    
    // while ($row = pg_fetch_assoc($result)) {
    //     echo json_encode($row);
    //     //echo "Name: " . $row["name"] . " - Age: " . "<br>";
    // }

    $allres = pg_fetch_all($result);
    echo json_encode($allres);
    
    // Free up memory
    pg_free_result($result);
    
    // Close the connection
    pg_close($conn);
}


     function addStudent(){
         //$student = $_POST['json_data'];
         $conn = pg_connect("host=192.168.82.215 port=5432 dbname=Students user=postgres password=bolik120");
         $requestBody = file_get_contents('php://input');
         $student = json_decode($requestBody, true);
         //$student = json_decode($jsonData, true);
         $student_name_length = strlen($student["name"]);
         $name_is_valid = true;
         if($student_name_length < 3 || $student_name_length > 20)
         {
             $name_is_valid = false;
         }
         $student_surname_length = strlen($student["surname"]);
         $surname_is_valid = true;
         if($student_surname_length < 3 || $student_surname_length > 20)
         {
             $surname_is_valid = false;
         }
         $student_group = $student["stgroup"];
         $group_is_valid = true;
            if($student_group == "")
         {
             $group_is_valid = false;
         }
         $sex = $student["gender"];
         $sex_is_valid = true;
         if($sex == "")
         {
             $sex_is_valid = false;
         }
         $response = [
             "isValid" => ($name_is_valid && $surname_is_valid && $group_is_valid && $sex_is_valid),
             "student" => $student,
         ];
         if($response["isValid"])
         {
             $query = "INSERT INTO \"Students\" (stgroup, name, surname, gender, birthday) VALUES ( $1, $2, $3, $4, $5)";
             $value_array = [
                $student["stgroup"],
                 $student["name"],
                 $student["surname"],
                 $student["gender"],
                 $student["birthday"],
             ];
             $result = pg_query_params($conn, $query, $value_array);
             $res = array('message' => 'success');

             // Convert the array to JSON
             $jsonResponse = json_encode($res);
             echo $jsonResponse;
             //pg_query($conn, $result);

         }else {

             $res = array('message' => 'error');

             // Convert the array to JSON
             $jsonResponse = json_encode($res);
             echo $jsonResponse;
         }
         pg_close($conn);
     }

    function deleteStudent($id){
        $conn = pg_connect("host=192.168.82.215 port=5432 dbname=Students user=postgres password=bolik120");
        $query = "DELETE FROM \"Students\" WHERE id = $id";

        pg_query($conn, $query);
        pg_close($conn);
    }


?>