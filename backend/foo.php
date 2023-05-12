<?php
$conn = pg_connect("host=192.168.0.103 port=5432 dbname=Students user=postgres password=bolik120");


// Define the SELECT query
$query = 'SELECT * FROM "Students"';

// Execute the query
$result = pg_query($conn, $query);

// Check if the query executed successfully
if (!$result) {
    echo "An error occurred.\n";
    exit;
}

// Fetch the results and display them
while ($row = pg_fetch_assoc($result)) {
    echo "Name: " . $row["name"] . " - Age: " . "<br>";
}

// Free up memory
pg_free_result($result);

// Close the connection
pg_close($conn);
?>