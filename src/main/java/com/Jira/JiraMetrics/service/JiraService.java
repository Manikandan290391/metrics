package com.Jira.JiraMetrics.service;

import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

@Service
@Slf4j
public class JiraService {


    @Value("${rapidAPI.covid.data.url}")
    private String url;

//    @Value("${rapidAPI.covid.data.xRapidApiKey}")
//    private String xRapidApiKey;
//    @Value("${rapidAPI.covid.data.getxRapidApiHost}")
//    private String getxRapidApiHost;

    @Autowired
    private RestTemplate restTemplate;

    public Object getAllCountryCovidData(String empId) {
            try {
                //Header value is set
                HttpHeaders headers = new HttpHeaders();
              //  headers.set("X-RapidAPI-Key", xRapidApiKey);
                //headers.set("X-RapidAPI-Host", getxRapidApiHost);

                // Make a GET call to the RapidAPI

                ResponseEntity<String> response = restTemplate.exchange(url+empId, HttpMethod.GET,new HttpEntity<>(headers),String.class);

                log.info("Output form rapidAPI:{}",response.getBody());

                JSONObject jsonObject = new JSONObject(response.getBody());
                System.out.println(response.getStatusCode());
               // JSONArray data= (JSONArray) jsonObject.get("data");
                JSONObject data=(JSONObject) jsonObject.get("data");
                String name =(String)data.get("first_name");
                return name;

//                ObjectMapper mapper = new ObjectMapper();
//
//                String json = response.getBody();
//                JsonNode node = mapper.readTree(json);
//               return node.get("total");


              //  return response.getBody();

            }catch (Exception e){
                log.error("Something went wrong while getting value from API",e);
                throw new ResponseStatusException(
                        HttpStatus.INTERNAL_SERVER_ERROR,
                        "Exception while calling endpoint of RapidAPI for corona",
                        e
                );
            }
    }
}
