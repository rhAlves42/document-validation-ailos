
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { usersList } from 'src/mocks/users.mock';

import { UserCardComponent } from './user-card.component';


describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [FontAwesomeModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the correct values on name', () => {
    component.currentUser = usersList[0]
    fixture.detectChanges()

    expect(fixture.debugElement.nativeElement.querySelector('#current-user-name').innerText).toEqual(usersList[0].name)
  });
  it('Should have the correct values on cpf status', () => {
    const cpfStatus = usersList[0].isCpfValid ? 'Regular' : 'Irregular'
    component.currentUser = usersList[0]
    fixture.detectChanges()

    expect(fixture.debugElement.nativeElement.querySelector('#current-user-cpf-valid').innerText).toEqual(cpfStatus)
  });
});
