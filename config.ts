import {defineConfig} from "@playwright/test";
export  default defineConfig({

    testDir:'./tests',
    fullyParallel:true,
    timeout:30000,
    workers:3,
    retries:2,
    reporter:[
        ['html'],
        ['dot']
    ],
    use:{
        headless:true,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        trace:'retain-on-failure',
    },
    projects:[
        {
            name:'setup',
            testMatch:'tests/auth.setup.ts'
        },
        {
            name:'chromium',
            dependencies:['setup'],
            use:{
                storageState:'tests/storage.json',
                channel:'chrome',
                viewport:null,
                launchOptions:{
                    args:['--start-maximized']
                }
            }

        }


    ]





})