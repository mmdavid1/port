---
title: "Automating lockpickers"
description: "Automatic lock picker + browser display"
date: "01/18/2024"
demoURL: "https://caz002.github.io/lockpick-anon/"
repoURL: "https://github.com/caz002/lockpick-anon"
---


Lock Pick anonymous is an automated lock picker with a real-time browser display of the pins getting picked.

## What is it

An automatic lock picker is a sophisticated electromechanical device designed to manipulate and open pin tumbler locks without the use of a key. This particular implementation utilizes an Arduino microcontroller board along with additional electronic components to automate the lock picking process.

## Key Components

- **Arduino Board:** The heart of the system, typically an Arduino Uno or Nano, which serves as the main controller for the device.
- **Stepper Motor:** A precise motor that controls the rotational movement, simulating the turning of a key in the lock.
- **Linear Actuator:** An electromechanical device that creates motion in a straight line, used to apply upward pressure on the lock pins.
- **Force Sensor:** A small sensor that detects the amount of pressure being applied to the lock pins.
- **Microcontroller:** In addition to the Arduino, a separate microcontroller (such as an ATtiny85) may be used for more specific tasks or to offload some processing from the main Arduino.
- **Power Supply:** A battery pack to provide the necessary electricity to run the system.
- **Custom PCB (Printed Circuit Board):** A specially designed board that connects all the electronic components.
- **Three JS:** Browser is built on three js to display the real time lock picker. We receive serial data updated in real time through a USB port, and using the web serial API (only on chrome), we are able to get the movements in near real time.


### What We learned

Unfortunately, during the demo we were not able to get the project working as we failed to pick a lock. Also, our browser was not able to display the real time data, since Chrome decided to block the data from serial port for some reason at that exact moment. Even though we did not succeed in the hackathon, we learned a lot and had a great time.

