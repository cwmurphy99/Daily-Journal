export const NavBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img id="pb-home" src="./src/images/DailyJournalLogo.png" alt="Daily Journal icon" />
            </div>
            <div class="navigation__item navigation__name">
                Daily Journal
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="postSearch" placeholder="Search posts..." />
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="./src/images/arcReactor.png" alt="Direct message" />
            </div>
        </nav>
    `
}