import {atom} from "recoil";


export const playlistIdState = atom({
    key: 'playlistIdState',
    default:'0rQlXYajG4mLF12F7M4ON5',
  });


export const songIdState = atom({
  key: 'songIdState',
  default:'0rQlXYajG4mLF12F7M4ON5',
});


export const playlistState = atom({
  key:  "playlistState",
  default:{
    "collaborative" : false,
    "description" : "",
    "external_urls" : {
      "spotify" : "https://open.spotify.com/playlist/23ZNzltCcWKLltQFlrwIUx"
    },
    "followers" : {
      "href" : null,
      "total" : 0
    },
    "href" : "https://api.spotify.com/v1/playlists/23ZNzltCcWKLltQFlrwIUx",
    "id" : "23ZNzltCcWKLltQFlrwIUx",
    "images" : [ {
      "height" : 640,
      "url" : "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
      "width" : 640
    } ],
    "name" : "Normal People",
    "owner" : {
      "display_name" : "kyosuke912",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
      },
      "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
      "id" : "kyqm5w3ecp5ecovlu3j7e2622",
      "type" : "user",
      "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
    },
    "primary_color" : null,
    "public" : false,
    "snapshot_id" : "NSwzNDE0MGM2NDI4NDczODg2YTM3MzUyNjNiOTQwNmM5NGU5YzVkZDFi",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/playlists/23ZNzltCcWKLltQFlrwIUx/tracks?offset=0&limit=100&locale=en-US,en;q=0.9",
      "items" : [ {
        "added_at" : "2022-06-17T21:28:55Z",
        "added_by" : {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
          },
          "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
          "id" : "kyqm5w3ecp5ecovlu3j7e2622",
          "type" : "user",
          "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
        },
        "is_local" : false,
        "primary_color" : null,
        "track" : {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
              },
              "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
              "id" : "3MZsBdqDrRTJihTHQrO6Dq",
              "name" : "Joji",
              "type" : "artist",
              "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
            } ],
            "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX"
            },
            "href" : "https://api.spotify.com/v1/albums/5EzDhyNZuO7kuaABHwbBKX",
            "id" : "5EzDhyNZuO7kuaABHwbBKX",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e0253f6fa0d2589c6a7174f4b81",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d0000485153f6fa0d2589c6a7174f4b81",
              "width" : 64
            } ],
            "name" : "Nectar",
            "release_date" : "2020-09-25",
            "release_date_precision" : "day",
            "total_tracks" : 18,
            "type" : "album",
            "uri" : "spotify:album:5EzDhyNZuO7kuaABHwbBKX"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
            },
            "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
            "id" : "3MZsBdqDrRTJihTHQrO6Dq",
            "name" : "Joji",
            "type" : "artist",
            "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/4N7IToHBlPXqlrXiv1Nij6"
            },
            "href" : "https://api.spotify.com/v1/artists/4N7IToHBlPXqlrXiv1Nij6",
            "id" : "4N7IToHBlPXqlrXiv1Nij6",
            "name" : "rei brown",
            "type" : "artist",
            "uri" : "spotify:artist:4N7IToHBlPXqlrXiv1Nij6"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "disc_number" : 1,
          "duration_ms" : 166883,
          "episode" : false,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "ZZOPM2002176"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/4UiogCfzKQW98U1GTCivsn"
          },
          "href" : "https://api.spotify.com/v1/tracks/4UiogCfzKQW98U1GTCivsn",
          "id" : "4UiogCfzKQW98U1GTCivsn",
          "is_local" : false,
          "name" : "Normal People (feat. rei brown)",
          "popularity" : 62,
          "preview_url" : "https://p.scdn.co/mp3-preview/5d7659e2441b512e53368b78096c4b25fa92e8cd?cid=0c6341c05681483e87400a216858a4e4",
          "track" : true,
          "track_number" : 12,
          "type" : "track",
          "uri" : "spotify:track:4UiogCfzKQW98U1GTCivsn"
        },
        "video_thumbnail" : {
          "url" : null
        }
      }, {
        "added_at" : "2022-06-17T21:30:43Z",
        "added_by" : {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
          },
          "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
          "id" : "kyqm5w3ecp5ecovlu3j7e2622",
          "type" : "user",
          "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
        },
        "is_local" : false,
        "primary_color" : null,
        "track" : {
          "album" : {
            "album_type" : "single",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/6PvScqSJuICxvoA3UDYPmu"
              },
              "href" : "https://api.spotify.com/v1/artists/6PvScqSJuICxvoA3UDYPmu",
              "id" : "6PvScqSJuICxvoA3UDYPmu",
              "name" : "JON VINYL",
              "type" : "artist",
              "uri" : "spotify:artist:6PvScqSJuICxvoA3UDYPmu"
            } ],
            "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/0qPYyDTTx74B8sfEGOYZyh"
            },
            "href" : "https://api.spotify.com/v1/albums/0qPYyDTTx74B8sfEGOYZyh",
            "id" : "0qPYyDTTx74B8sfEGOYZyh",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b273a456d883bf8936bc015f84ba",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e02a456d883bf8936bc015f84ba",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d00004851a456d883bf8936bc015f84ba",
              "width" : 64
            } ],
            "name" : "Addicted (Acoustic)",
            "release_date" : "2020-05-01",
            "release_date_precision" : "day",
            "total_tracks" : 1,
            "type" : "album",
            "uri" : "spotify:album:0qPYyDTTx74B8sfEGOYZyh"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6PvScqSJuICxvoA3UDYPmu"
            },
            "href" : "https://api.spotify.com/v1/artists/6PvScqSJuICxvoA3UDYPmu",
            "id" : "6PvScqSJuICxvoA3UDYPmu",
            "name" : "JON VINYL",
            "type" : "artist",
            "uri" : "spotify:artist:6PvScqSJuICxvoA3UDYPmu"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "disc_number" : 1,
          "duration_ms" : 185129,
          "episode" : false,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "USLD91725678"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/7HQc8ITNpm2NaIdLcKLDAY"
          },
          "href" : "https://api.spotify.com/v1/tracks/7HQc8ITNpm2NaIdLcKLDAY",
          "id" : "7HQc8ITNpm2NaIdLcKLDAY",
          "is_local" : false,
          "name" : "Addicted (Acoustic)",
          "popularity" : 45,
          "preview_url" : "https://p.scdn.co/mp3-preview/0f98f8d036b0f8b57526136c8838562098cf1160?cid=0c6341c05681483e87400a216858a4e4",
          "track" : true,
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:7HQc8ITNpm2NaIdLcKLDAY"
        },
        "video_thumbnail" : {
          "url" : null
        }
      }, {
        "added_at" : "2022-06-18T20:23:30Z",
        "added_by" : {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/user/kyqm5w3ecp5ecovlu3j7e2622"
          },
          "href" : "https://api.spotify.com/v1/users/kyqm5w3ecp5ecovlu3j7e2622",
          "id" : "kyqm5w3ecp5ecovlu3j7e2622",
          "type" : "user",
          "uri" : "spotify:user:kyqm5w3ecp5ecovlu3j7e2622"
        },
        "is_local" : false,
        "primary_color" : null,
        "track" : {
          "album" : {
            "album_type" : "single",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
              },
              "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
              "id" : "3MZsBdqDrRTJihTHQrO6Dq",
              "name" : "Joji",
              "type" : "artist",
              "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
            }, {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX"
              },
              "href" : "https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX",
              "id" : "5fMUXHkw8R8eOP2RNVYEZX",
              "name" : "Diplo",
              "type" : "artist",
              "uri" : "spotify:artist:5fMUXHkw8R8eOP2RNVYEZX"
            } ],
            "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/1jcNHi5D96aaD0T5f1OjFY"
            },
            "href" : "https://api.spotify.com/v1/albums/1jcNHi5D96aaD0T5f1OjFY",
            "id" : "1jcNHi5D96aaD0T5f1OjFY",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/ab67616d0000b2730e991b59cee17246a5e604d0",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/ab67616d00001e020e991b59cee17246a5e604d0",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/ab67616d000048510e991b59cee17246a5e604d0",
              "width" : 64
            } ],
            "name" : "Daylight",
            "release_date" : "2020-08-06",
            "release_date_precision" : "day",
            "total_tracks" : 1,
            "type" : "album",
            "uri" : "spotify:album:1jcNHi5D96aaD0T5f1OjFY"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq"
            },
            "href" : "https://api.spotify.com/v1/artists/3MZsBdqDrRTJihTHQrO6Dq",
            "id" : "3MZsBdqDrRTJihTHQrO6Dq",
            "name" : "Joji",
            "type" : "artist",
            "uri" : "spotify:artist:3MZsBdqDrRTJihTHQrO6Dq"
          }, {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX"
            },
            "href" : "https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX",
            "id" : "5fMUXHkw8R8eOP2RNVYEZX",
            "name" : "Diplo",
            "type" : "artist",
            "uri" : "spotify:artist:5fMUXHkw8R8eOP2RNVYEZX"
          } ],
          "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
          "disc_number" : 1,
          "duration_ms" : 163905,
          "episode" : false,
          "explicit" : true,
          "external_ids" : {
            "isrc" : "USSM12004620"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/6Ed1q0X8oSKSm4IIhiQbYg"
          },
          "href" : "https://api.spotify.com/v1/tracks/6Ed1q0X8oSKSm4IIhiQbYg",
          "id" : "6Ed1q0X8oSKSm4IIhiQbYg",
          "is_local" : false,
          "name" : "Daylight",
          "popularity" : 73,
          "preview_url" : "https://p.scdn.co/mp3-preview/c0ef70b0f86769434eedd0676217b2f4b08728c8?cid=0c6341c05681483e87400a216858a4e4",
          "track" : true,
          "track_number" : 1,
          "type" : "track",
          "uri" : "spotify:track:6Ed1q0X8oSKSm4IIhiQbYg"
        },
        "video_thumbnail" : {
          "url" : null
        }
      } ],
      "limit" : 100,
      "next" : null,
      "offset" : 0,
      "previous" : null,
      "total" : 3
    },
    "type" : "playlist",
    "uri" : "spotify:playlist:23ZNzltCcWKLltQFlrwIUx"
  }
});

export const audioFeaturesState = atom({
  key:  "audioFeaturesState",
  default: {
    "audio_features" : [ {
      "danceability" : 0.727,
      "energy" : 0.833,
      "key" : 0,
      "loudness" : -3.384,
      "mode" : 1,
      "speechiness" : 0.0443,
      "acousticness" : 0.0650,
      "instrumentalness" : 0,
      "liveness" : 0.122,
      "valence" : 0.525,
      "tempo" : 99.985,
      "type" : "audio_features",
      "id" : "2lXu7SNGIKHJ8EV2EetYFa",
      "uri" : "spotify:track:2lXu7SNGIKHJ8EV2EetYFa",
      "track_href" : "https://api.spotify.com/v1/tracks/2lXu7SNGIKHJ8EV2EetYFa",
      "analysis_url" : "https://api.spotify.com/v1/audio-analysis/2lXu7SNGIKHJ8EV2EetYFa",
      "duration_ms" : 274587,
      "time_signature" : 4
    }, {
      "danceability" : 0.568,
      "energy" : 0.727,
      "key" : 1,
      "loudness" : -5.415,
      "mode" : 1,
      "speechiness" : 0.0542,
      "acousticness" : 0.0343,
      "instrumentalness" : 0,
      "liveness" : 0.197,
      "valence" : 0.797,
      "tempo" : 162.811,
      "type" : "audio_features",
      "id" : "648sjoR2ga0PXixXttyqzJ",
      "uri" : "spotify:track:648sjoR2ga0PXixXttyqzJ",
      "track_href" : "https://api.spotify.com/v1/tracks/648sjoR2ga0PXixXttyqzJ",
      "analysis_url" : "https://api.spotify.com/v1/audio-analysis/648sjoR2ga0PXixXttyqzJ",
      "duration_ms" : 223741,
      "time_signature" : 4
    }, {
      "danceability" : 0.604,
      "energy" : 0.973,
      "key" : 8,
      "loudness" : -4.028,
      "mode" : 1,
      "speechiness" : 0.0778,
      "acousticness" : 0.00284,
      "instrumentalness" : 0.00000232,
      "liveness" : 0.138,
      "valence" : 0.161,
      "tempo" : 172.027,
      "type" : "audio_features",
      "id" : "0zcT4Pxswa5QJkzO4EIy4G",
      "uri" : "spotify:track:0zcT4Pxswa5QJkzO4EIy4G",
      "track_href" : "https://api.spotify.com/v1/tracks/0zcT4Pxswa5QJkzO4EIy4G",
      "analysis_url" : "https://api.spotify.com/v1/audio-analysis/0zcT4Pxswa5QJkzO4EIy4G",
      "duration_ms" : 102505,
      "time_signature" : 4
    }, {
      "danceability" : 0.650,
      "energy" : 0.880,
      "key" : 4,
      "loudness" : -5.326,
      "mode" : 1,
      "speechiness" : 0.0283,
      "acousticness" : 0.360,
      "instrumentalness" : 0.00369,
      "liveness" : 0.230,
      "valence" : 0.921,
      "tempo" : 124.985,
      "type" : "audio_features",
      "id" : "5j7ixaLeGTGSv4DzKs0pCM",
      "uri" : "spotify:track:5j7ixaLeGTGSv4DzKs0pCM",
      "track_href" : "https://api.spotify.com/v1/tracks/5j7ixaLeGTGSv4DzKs0pCM",
      "analysis_url" : "https://api.spotify.com/v1/audio-analysis/5j7ixaLeGTGSv4DzKs0pCM",
      "duration_ms" : 242913,
      "time_signature" : 4
    } ]
  },
});