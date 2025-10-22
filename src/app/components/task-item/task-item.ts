import { Component, Input } from '@angular/core';
import { ITask } from '../../services/task-service';


@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task: ITask | null = null;
}
