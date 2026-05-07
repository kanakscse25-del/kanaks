<html>
<head>
<link rel="stylesheet" href="style.css">
<title>Skyline Properties</title>

<script>
function filterProperties() {
    let bhk = document.getElementById("bhk").value;
    let price = document.getElementById("price").value;

    let p1 = document.getElementById("property1");
    let p2 = document.getElementById("property2");

    // Show all first
    p1.style.display = "block";
    p2.style.display = "block";

    // Filter BHK
    if (bhk == "2") {
        p2.style.display = "none";
    } else if (bhk == "3") {
        p1.style.display = "none";
    }

    // Filter Price
    if (price == "below50") {
        p1.style.display = "none";
        p2.style.display = "none";
    }
}
</script>

</head>

<body>

<h1>Skyline Properties</h1>

<h3>Filter Properties</h3>

<label>Price Range:</label>
<select id="price" onchange="filterProperties()">
    <option value="">Select Price</option>
    <option value="below50">Below 50 Lakhs</option>
    <option value="50to1">50 Lakhs - 1 Crore</option>
    <option value="above1">Above 1 Crore</option>
</select>

<br><br>

<label>BHK Type:</label>
<select id="bhk" onchange="filterProperties()">
    <option value="">Select BHK</option>
    <option value="1">1 BHK</option>
    <option value="2">2 BHK</option>
    <option value="3">3 BHK</option>
</select>

<hr>

<h2>Property Listings</h2>

<div id="property1">
    <h3>2 BHK Apartment</h3>
    <img src="2bhkk.jpg" height="200" width="200">
    <p>Price: 75 Lakhs</p>
    <p>Location: Mumbai</p>
    <p>Area: 900 sq.ft</p>
</div>

<hr>

<div id="property2">
    <h3>3 BHK Villa</h3>
    <img src="3bhkk.jpg" height="200" width="200">
    <p>Price: 1.2 Crore</p>
    <p>Location: Pune</p>
    <p>Area: 1500 sq.ft</p>
</div>

</body>
</html>
