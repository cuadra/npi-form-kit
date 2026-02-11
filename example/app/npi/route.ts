import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const number = request.nextUrl.searchParams.get("number");

  if (!number) {
    return NextResponse.json(
      { error: "Missing required query param: number" },
      { status: 400 },
    );
  }

  const url = new URL("https://npiregistry.cms.hhs.gov/api/");
  url.searchParams.set("number", number);
  url.searchParams.set("version", "2.1");

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      return NextResponse.json(
        { error: "NPI Registry request failed" },
        { status: response.status },
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
/*
export async function GET() {
  const data = {
  "result_count": 1,
  "results": [
    {
      "addresses": [
        {
          "address_1": "1400 WHITE DR STE B",
          "address_purpose": "MAILING",
          "address_type": "DOM",
          "city": "TITUSVILLE",
          "country_code": "US",
          "country_name": "United States",
          "postal_code": "327809657",
          "state": "FL",
          "telephone_number": "321-676-8989"
        },
        {
          "address_1": "1400 WHITE DR STE B",
          "address_purpose": "LOCATION",
          "address_type": "DOM",
          "city": "TITUSVILLE",
          "country_code": "US",
          "country_name": "United States",
          "postal_code": "327809657",
          "state": "FL",
          "telephone_number": "321-676-8989"
        }
      ],
      "basic": {
        "authorized_official_first_name": "DALE",
        "authorized_official_last_name": "GREYSLAK",
        "authorized_official_name_prefix": "Mr.",
        "authorized_official_name_suffix": "--",
        "authorized_official_telephone_number": "3212677576",
        "authorized_official_title_or_position": "Managing Member",
        "enumeration_date": "2011-06-15",
        "last_updated": "2013-08-23",
        "organization_name": "101 DIABETIC SUPPLIES, LLC",
        "organizational_subpart": "NO",
        "status": "A"
      },
      "created_epoch": "1308167765000",
      "endpoints": [],
      "enumeration_type": "NPI-2",
      "identifiers": [],
      "last_updated_epoch": "1377289220000",
      "number": "1003101296",
      "other_names": [
        {
          "code": "4",
          "organization_name": "JADE DIABETIC GROUP",
          "type": "Former Legal Business Name"
        }
      ],
      "practiceLocations": [],
      "taxonomies": [
        {
          "code": "332B00000X",
          "desc": "Durable Medical Equipment & Medical Supplies",
          "license": null,
          "primary": true,
          "state": null,
          "taxonomy_group": ""
        }
      ]
    }
  ]
}


  return NextResponse.json(data);
}
*/
