# Project Name

T20 World Premier League Auction

# Brief Descripton

This project is a React-built cricket team management application. Using a certain number of coins, users can select players from a pool to create and manage a "Dream 11" cricket side. These are some essential characteristics:

- **Player Selection:** By subtracting the bidding prices from their available coins, users can add players to their team. Users are warned with notifications, which are controlled by React-Toastify, if they try to go over the player or coin restrictions.

- **Claims:** In order to boost their coin balance for player acquisitions, players can obtain extra credits from the Banner component.

- **Player Queue and Removal:** The application keeps track of a player queue that users may modify by adding or removing preferred players. The picked players are displayed by a Selected component and allows users to remove them if needed.

- **Responsive Layout and Components:** It has reusable, modular components (Header, Footer, Banner, Players, AvailablePlayers, Selected) that keep the layout tidy and responsive.


# Technologies used

- **React:** The foundational framework for creating reusable components in user interface design.
- **React hooks (useState, useEffect):** For controlling event processing, side effects, and component state inside functional components.
- **React-Toastify:** This tool allows users to customize toast alerts and provides feedback on mistakes or player additions.
- **Tailwind CSS:** For utility-first styling, guaranteeing quick, reliable, and adaptable user interface development.
- **JavaScript ES6+:** This version of JavaScript has capabilities like template literals, destructuring, map, filter, find and arrow functions that make code clearer and easier to comprehend.
- **HTML5:** To organize the fundamental content and component elements.
- **REST API (or Mock Data):** This method can be used to retrieve player data from a local JSON file.

# 3 key features of the project

- **Coin Balance and Credits System:** Users can "bid" for players using a limited amount of coin balance. The "Claim Free Credit" button allows them to claim extra credits, which adds a strategic element to team choosing and makes the game more interesting.
- **Responsive User Interface with Toggleable Views:** The application has two primary views, "Available Players" and "Selected Players," which let users quickly transition between controlling their chosen squad and adding new players. A seamless experience on all devices is guaranteed by the responsive design.
- **Dynamic Player Selection and Management:** After verifying the maximum number of players permitted and the available coin balance, users can add players to their team from a list that is available. Through toast alerts, the software gives users real-time feedback, telling them when they hit limits or when a player is successfully added.

## Deployment

To deploy this project run

```bash
  https://bpl-auction.surge.sh
```
