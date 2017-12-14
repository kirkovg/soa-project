/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ApigatewayTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { BookpictureDetailComponent } from '../../../../../../main/webapp/app/entities/bookpicture/bookpicture-detail.component';
import { BookpictureService } from '../../../../../../main/webapp/app/entities/bookpicture/bookpicture.service';
import { Bookpicture } from '../../../../../../main/webapp/app/entities/bookpicture/bookpicture.model';

describe('Component Tests', () => {

    describe('Bookpicture Management Detail Component', () => {
        let comp: BookpictureDetailComponent;
        let fixture: ComponentFixture<BookpictureDetailComponent>;
        let service: BookpictureService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ApigatewayTestModule],
                declarations: [BookpictureDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    BookpictureService,
                    JhiEventManager
                ]
            }).overrideTemplate(BookpictureDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(BookpictureDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BookpictureService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Bookpicture(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.bookpicture).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
