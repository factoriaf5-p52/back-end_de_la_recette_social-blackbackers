'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api-recette-black documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' : 'data-target="#xs-controllers-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' :
                                            'id="xs-controllers-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' : 'data-target="#xs-injectables-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' :
                                        'id="xs-injectables-links-module-AppModule-37fae40bc86551c0c5ad6befafea46a0b5c7f22b7e3320086d1d69497c9d7c44a3fdaac4277d512084d43271ac55f7c4d7538e131a4628f2d31de4416f816f76"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' : 'data-target="#xs-controllers-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' :
                                            'id="xs-controllers-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' : 'data-target="#xs-injectables-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' :
                                        'id="xs-injectables-links-module-AuthModule-4e55a0212af0e3dd80aa4b2373baac53b53963a7a8a4757c0f4a6c0f02918ebee9dffee9579c05fce255a313df07a8f8e7125fcd32fed0c16e236d8796227245"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesModule.html" data-type="entity-link" >FavoritesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' : 'data-target="#xs-controllers-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' :
                                            'id="xs-controllers-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' }>
                                            <li class="link">
                                                <a href="controllers/FavoritesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' : 'data-target="#xs-injectables-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' :
                                        'id="xs-injectables-links-module-FavoritesModule-486cd792e172e71b9127fbd2112a674e4b815e81c8b2005aeeeca2ddd3dff2f38f8bdb5cfc5beaffaf19d22f0f379475813f34fb58296cb50c4f2587db8bac6f"' }>
                                        <li class="link">
                                            <a href="injectables/FavoritesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupModule.html" data-type="entity-link" >GroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' : 'data-target="#xs-controllers-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' :
                                            'id="xs-controllers-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' }>
                                            <li class="link">
                                                <a href="controllers/GroupController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' : 'data-target="#xs-injectables-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' :
                                        'id="xs-injectables-links-module-GroupModule-285cf0948ea3eec44552b9f2de65f8b77ca33ad34794e27c5365c6c8e3d19a739efc880fd39807e39e90070ab055cb923d7dc91dba665afa45ed7d35e4a9d6ad"' }>
                                        <li class="link">
                                            <a href="injectables/GroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IngredientModule.html" data-type="entity-link" >IngredientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' : 'data-target="#xs-controllers-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' :
                                            'id="xs-controllers-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' }>
                                            <li class="link">
                                                <a href="controllers/IngredientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' : 'data-target="#xs-injectables-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' :
                                        'id="xs-injectables-links-module-IngredientModule-cf1149ee216f371af7a827f8fc23fb2b8304f80438483c0444cab27bebc0a9604e9d232eeb20db33c741a3574228b84538ef1df5426c22f003f1c68af4d1bc82"' }>
                                        <li class="link">
                                            <a href="injectables/IngredientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' : 'data-target="#xs-controllers-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' :
                                            'id="xs-controllers-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' : 'data-target="#xs-injectables-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' :
                                        'id="xs-injectables-links-module-NotificationsModule-2c82e0a73da318b301175bc95127f4e2bbfc23e07ae115e35eb629bc5c9897652f2d278d9ca96a96e847678cbde2b5131428233318b4449154b4c5ace4254ea0"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipeModule.html" data-type="entity-link" >RecipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' : 'data-target="#xs-controllers-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' :
                                            'id="xs-controllers-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' }>
                                            <li class="link">
                                                <a href="controllers/RecipeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' : 'data-target="#xs-injectables-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' :
                                        'id="xs-injectables-links-module-RecipeModule-776650ccf562a21b7db8b680ba7064542b7de827fc367af880d044950d6fafb9b7782271e965061fc0df20b45f1ef5c17b41640d9f38b80dede003641554d398"' }>
                                        <li class="link">
                                            <a href="injectables/RecipeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListModule.html" data-type="entity-link" >ShoppingListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' : 'data-target="#xs-controllers-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' :
                                            'id="xs-controllers-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' }>
                                            <li class="link">
                                                <a href="controllers/ShoppingListController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingListController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' : 'data-target="#xs-injectables-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' :
                                        'id="xs-injectables-links-module-ShoppingListModule-d0275675639cd50bae97316a733361c573e4457714609542bd415a6621c85a65c29c18b3dd70a0377e0374ef68b8825a8633fd4870fe7ef7394da640ddd1f374"' }>
                                        <li class="link">
                                            <a href="injectables/ShoppingListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingListService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' : 'data-target="#xs-controllers-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' :
                                            'id="xs-controllers-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' : 'data-target="#xs-injectables-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' :
                                        'id="xs-injectables-links-module-UserModule-b4320bc1ea915134f115985e1f765acd91e0cce4c83877710f4a5ccb05986fe651aae7c87e7e8ab712b7b9ee66fa66f903ad41aeaa33b6c5c057908e20e3ee29"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FavoritesController.html" data-type="entity-link" >FavoritesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GroupController.html" data-type="entity-link" >GroupController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/IngredientController.html" data-type="entity-link" >IngredientController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotificationController.html" data-type="entity-link" >NotificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RecipeController.html" data-type="entity-link" >RecipeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ShoppingListController.html" data-type="entity-link" >ShoppingListController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Badges.html" data-type="entity-link" >Badges</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentNested.html" data-type="entity-link" >CommentNested</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFavoriteDto.html" data-type="entity-link" >CreateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGroupDto.html" data-type="entity-link" >CreateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateIngredientDto.html" data-type="entity-link" >CreateIngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRecipeDto.html" data-type="entity-link" >CreateRecipeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorites.html" data-type="entity-link" >Favorites</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetGroupFilterDto.html" data-type="entity-link" >GetGroupFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetRecipiesFilterDto.html" data-type="entity-link" >GetRecipiesFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Group.html" data-type="entity-link" >Group</a>
                            </li>
                            <li class="link">
                                <a href="classes/Groups.html" data-type="entity-link" >Groups</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ingredient.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="classes/IngredientNested.html" data-type="entity-link" >IngredientNested</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAuthDto.html" data-type="entity-link" >LoginAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification_list.html" data-type="entity-link" >Notification_list</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recipe.html" data-type="entity-link" >Recipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecipeComment.html" data-type="entity-link" >RecipeComment</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterAuthDto.html" data-type="entity-link" >RegisterAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShoppingList.html" data-type="entity-link" >ShoppingList</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFavoriteDto.html" data-type="entity-link" >UpdateFavoriteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGroupDto.html" data-type="entity-link" >UpdateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateIngredientDto.html" data-type="entity-link" >UpdateIngredientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDto.html" data-type="entity-link" >UpdateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRecipeDto.html" data-type="entity-link" >UpdateRecipeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateShoppingListDto.html" data-type="entity-link" >UpdateShoppingListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertShoppingListDto.html" data-type="entity-link" >UpsertShoppingListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoritesService.html" data-type="entity-link" >FavoritesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupService.html" data-type="entity-link" >GroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IngredientService.html" data-type="entity-link" >IngredientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseObjectIdPipe.html" data-type="entity-link" >ParseObjectIdPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipeService.html" data-type="entity-link" >RecipeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShoppingListService.html" data-type="entity-link" >ShoppingListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CompareIdGuard.html" data-type="entity-link" >CompareIdGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});