import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FcmPage } from './fcm.page';

describe('FcmPage', () => {
  let component: FcmPage;
  let fixture: ComponentFixture<FcmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
