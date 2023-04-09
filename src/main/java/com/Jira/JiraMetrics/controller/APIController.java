package com.Jira.JiraMetrics.controller;

import com.Jira.JiraMetrics.Excel.CreateExcel;
import com.Jira.JiraMetrics.service.JiraService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
//@RequestMapping("/covid")
@RequiredArgsConstructor
public class APIController {
    CreateExcel createExcel = new CreateExcel();
 //   TestObj testObj = new TestObj();
    String ss="";
    private final JiraService jiraService;
    @GetMapping("/get-all-country-covid-data")
    public ResponseEntity<?> callRapidEndpointToGetCovidData() throws IOException {
        test();
      //  this.ss =covidService.getAllCountryCovidData();
        return ResponseEntity.ok(jiraService.getAllCountryCovidData("2"));
    }

    public void test() throws IOException {
        createExcel.createExcel(jiraService.getAllCountryCovidData("2").toString());
    }





}
