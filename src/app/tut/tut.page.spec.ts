import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TutPage } from './tut.page';

describe('TutPage', () => {
  let component: TutPage;
  let fixture: ComponentFixture<TutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
