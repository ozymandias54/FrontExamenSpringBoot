import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemeComponent } from './input-iteme.component';

describe('InputItemeComponent', () => {
  let component: InputItemeComponent;
  let fixture: ComponentFixture<InputItemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputItemeComponent]
    });
    fixture = TestBed.createComponent(InputItemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
