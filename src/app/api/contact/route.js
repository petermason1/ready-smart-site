export async function POST(request) {
  // Parse the JSON body
  let name, email, message;
  try {
    const data = await request.json();
    name = data.name;
    email = data.email;
    message = data.message;
  } catch (err) {
    console.error("❌ Invalid JSON body:", err);
    return new Response(JSON.stringify({ error: "Invalid request format" }), { status: 400 });
  }

  // Get environment variables
  const token = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  // Debug: Print out everything we're about to use
  console.log("=== AIRTABLE DEBUG ===");
  console.log("Token present:", !!token);
  console.log("Base ID:", baseId);
  console.log("Table Name:", tableName);
  console.log("Name:", name, "Email:", email, "Message:", message);

  // Validate required values
  if (!token || !baseId || !tableName) {
    console.error("❌ Missing Airtable environment variables!");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
  }
  if (!name || !email || !message) {
    console.error("❌ Missing form fields!");
    return new Response(JSON.stringify({ error: "Please fill in all fields" }), { status: 400 });
  }

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  // Prepare payload
  const airtablePayload = {
    records: [
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ],
  };

  // Debug: Show what will be sent to Airtable
  console.log("POST to:", airtableUrl);
  console.log("Payload:", JSON.stringify(airtablePayload, null, 2));

  // Send to Airtable
  let airtableRes, airtableData;
  try {
    airtableRes = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airtablePayload),
    });
    airtableData = await airtableRes.json();
  } catch (err) {
    console.error("❌ Fetch error:", err);
    return new Response(JSON.stringify({ error: "Failed to connect to Airtable" }), { status: 500 });
  }

  if (!airtableRes.ok) {
    console.error("❌ Airtable API Error:", airtableData);
    return new Response(JSON.stringify({ error: "Airtable error", details: airtableData }), { status: 500 });
  }

  // Success!
  console.log("✅ Sent to Airtable:", airtableData);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
