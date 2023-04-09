package com.Jira.JiraMetrics.controller;

import com.Jira.JiraMetrics.Excel.CreateExcel;
import com.Jira.JiraMetrics.POJO.FormData;
import com.Jira.JiraMetrics.service.JiraService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class JIRAController {
    CreateExcel createExcel = new CreateExcel();
    private final JiraService jiraService;
    @GetMapping("/testt")
    public String welcome()
    {
        return "form1";
    }

    public void testt()

    {
        System.out.println("Mani");
    }
    //    @GetMapping(value="/form")
    //    public String showForm(Model model){
    //        TestObj testObj = new TestObj();
    //          model.addAttribute("testobj",testObj);
    //        return "form1" ;
    //    }
    @PostMapping(value="/form")
    public String getDataFromForm(FormData formData) throws IOException {
        System.out.println("name from api "+jiraService.getAllCountryCovidData("2"));
        createExcel.createExcel(jiraService.getAllCountryCovidData(formData.getEmail()).toString());
        return  "test";
    }
    @GetMapping(value="/metrics")
    public String metricsPage()  {

        return  "metrics";
    }
}
