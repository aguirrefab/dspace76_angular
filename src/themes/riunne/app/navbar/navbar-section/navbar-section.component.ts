import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MenuID } from 'src/app/shared/menu/menu-id.model';
import { rendersSectionForMenu } from 'src/app/shared/menu/menu-section.decorator';
import { MenuSectionComponent } from 'src/app/shared/menu/menu-section/menu-section.component';
import { MenuService } from 'src/app/shared/menu/menu.service';


/**
 * Represents a non-expandable section in the navbar
 */
@Component({
  /* eslint-disable @angular-eslint/component-selector */
  selector: 'li[ri-navbar-section]',
  templateUrl: './navbar-section.component.html',
  styleUrls: ['./navbar-section.component.scss']
})
@rendersSectionForMenu(MenuID.PUBLIC, false)
export class NavbarSectionComponent extends MenuSectionComponent implements OnInit {
  /**
   * This section resides in the Public Navbar
   */
  menuID = MenuID.PUBLIC;

  constructor(@Inject('sectionDataProvider') menuSection,
    protected menuService: MenuService,
    protected injector: Injector
  ) {
    super(menuSection, menuService, injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
