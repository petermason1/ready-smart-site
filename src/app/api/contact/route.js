export async function POST(request) {
  const { name, email, message } = await request.json();

  const token = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

  // ✅ Move your logs up here before the request is sent
  console.log("📤 Sending to:", airtableUrl);
  console.log("🧾 Payload:", {
    Name: name,
    Email: email,
    Message: message,
  });
  console.log("🔑 Token:", token ? "Present" : "Missing");

  const response = await fetch(airtableUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Message: message,
          },
        },
      ],
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error('Airtable error:', result);
    return new Response(JSON.stringify({ error: 'Failed to submit' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
